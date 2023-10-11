import {
	EMAIL_APP_PASSWORD,
	EMAIL_APP_TO_ADDRESS,
	EMAIL_APP_USER
} from '$env/static/private';
import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();
			const name = data.get('name')?.toString();
			const email = data.get('email')?.toString();
			const subject = data.get('subject')?.toString();
			const reason = data.get('reason')?.toString();
			const message = data.get('message')?.toString();

			if (subject) {
				// Honeypot
				return {
					status: 200,
					body: {
						message: 'Email sent successfully'
					}
				};
			}

			// Create a transporter object using the nodemailer library
			const transporter = nodemailer.createTransport({
				host: 'smtp.fastmail.com',
				port: 465,
				secure: true,
				auth: {
					user: EMAIL_APP_USER,
					pass: EMAIL_APP_PASSWORD
				}
			});

			// Set up email data
			const mail_options = {
				from: `"${name}" <${email}>`,
				to: EMAIL_APP_TO_ADDRESS,
				subject: reason,
				text: message
			};

			// Send email
			const info = await transporter.sendMail(mail_options);

			return {
				status: 200,
				body: {
					message: 'Email sent successfully',
					messageId: info.messageId
				}
			};
		} catch (error) {
			return fail(500, {
				error: 'Internal server error'
			});
		}
	}
};
