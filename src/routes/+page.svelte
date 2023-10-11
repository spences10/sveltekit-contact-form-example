<script lang="ts">
	import { ContactForm } from '$lib/components';
</script>

<h1>SvelteKit Contact Form Example</h1>

<p>
	Use <code>nodemailer</code> with your email provider SMTP app password.
</p>
<p>
	Read the <a
		href="https://scottspence.com/posts/contact-form-send-email-from-site"
	>
		blog post
	</a> for more info.
</p>
<p>
	<a href="/contact">Contact page</a> is the same component.
</p>
<p>
	The component is imported here from <code>$lib/components</code>.
</p>
<h2>This doesn't submit anywhere 😅</h2>
<p>
	If you want to contact me go to the <a
		href="https://scottspence.com/contact"
	>
		contact page
	</a> on my site.
</p>
<ContactForm />
