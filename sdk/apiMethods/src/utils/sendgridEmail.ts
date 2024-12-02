/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import sgMail from '@sendgrid/mail';

import userRegistrationemailTemplate from './userRegistrationemailTemplate';
import userResetPasswordemailTemplate from './userResetPasswordemailTemplate';

type Params = {
  type: 'create account' | 'reset password';
  email: string;
  password: string;
};

type BuiltEmail =
  | undefined
  | {
      to: string;
      from: string;
      subject: string;
      html: string;
    };

const sendgridEmail = async ({ type, email, password }: Params) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  let builtEmail: BuiltEmail;

  switch (type) {
    case 'create account':
      builtEmail = userRegistrationemailTemplate(email, password);
      break;

    case 'reset password':
      builtEmail = userResetPasswordemailTemplate(email, password);
      break;
  }

  if (!builtEmail) throw Error('No email was built. Oh oh!');

  try {
    await sgMail.send(builtEmail);
    console.log('Email sent');
  } catch (err) {
    const error = err as any;
    console.error(error);
    if (error.response) {
      console.error(error.response.body);
    }

    throw Error('Failed to send out Email');
  }
};

export default sendgridEmail;
