/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import sgMail from '@sendgrid/mail';

import userRegistrationemailTemplate from './userRegistrationemailTemplate';

type Params = {
  email: string;
  password: string;
};

const sendgridInvitationEmail = async ({ email, password }: Params) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const builtEmail = userRegistrationemailTemplate(email, password);

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

export default sendgridInvitationEmail;
