# SvelteKit contact form example

Use your email provider app password to send emails from your
SvelteKit app.

Read the [blog post] for more information.

## Setup

Copy `example.env` to `.env` and fill in the values.

```bash
cp example.env .env
```

## Environment variables

Update the environment variables in `.env` with the values for your
email provider.

```
EMAIL_APP_PASSWORD=your-email-provider-app-password
EMAIL_APP_USER=your-email-provider-user-email
EMAIL_APP_TO_ADDRESS=email-address-to-send-to
```

<!-- Links -->

[blog post]:
	https://scottspence.com/posts/contact-form-send-email-from-site
