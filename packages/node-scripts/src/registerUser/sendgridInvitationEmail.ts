/* eslint-disable import/no-extraneous-dependencies */

/* eslint-disable no-console */
import sgMail from '@sendgrid/mail';

import emailTemplate from './emailTemplate.js';

const sendgridInvitationEmail = async (email: string, password: string) => {
  const { SENDGRID_API_KEY = '' } = (await import('../utils/envVariables.js')).default();

  sgMail.setApiKey(SENDGRID_API_KEY);

  const builtEmail = emailTemplate(email, password);

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
