import { Resend as ResendLib } from 'resend';

import userRegistrationemailTemplate from './userRegistrationemailTemplate';
import userResetPasswordemailTemplate from './userResetPasswordemailTemplate';

type BuiltEmail =
  | undefined
  | {
      to: string;
      from: string;
      subject: string;
      html: string;
    };

type Params = {
  type: 'create account' | 'reset password';
  email: string;
  password: string;
};

type Resend = (params: Params) => Promise<void>;

const resend: Resend = async ({ type, email, password }) => {
  const client = new ResendLib(process.env.RESEND_API_KEY);

  let builtEmail: BuiltEmail;

  if (type === 'create account') {
    builtEmail = userRegistrationemailTemplate(email, password);
  } else if (type === 'reset password') {
    builtEmail = userResetPasswordemailTemplate(email, password);
  }

  if (!builtEmail) throw Error('No email was built. Oh oh!');

  const { data, error } = await client.emails.send(builtEmail);

  if (error) {
    console.error({ error });
  }

  console.log({ data });
};

export default resend;
