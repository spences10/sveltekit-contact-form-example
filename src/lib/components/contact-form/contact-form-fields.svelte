<script lang="ts">
	import { enhance } from '$app/forms';
	export let handle_result: Function;
</script>

<form
	method="POST"
	action="/contact"
	enctype="multipart/form-data"
	use:enhance={() => {
		return ({ update, result }) => {
			handle_result(result);
			update({ reset: true });
		};
	}}
	class="bg-base-300 rounded-box w-full p-6 shadow-md"
>
	<fieldset class="fieldset">
		<label class="label" for="name">Name</label>
		<input
			type="text"
			id="name"
			name="name"
			aria-label="name"
			placeholder="Name"
			required
			class="input w-full"
		/>

		<label class="label" for="email">Email</label>
		<input
			type="email"
			id="email"
			name="email"
			aria-label="email"
			placeholder="Email"
			required
			class="input w-full"
		/>

		<!-- honeypot, the value should be empty -->
		<input
			type="text"
			name="subject"
			id="subject"
			class="hidden"
			value="speak"
		/>

		<label class="label" for="reason">Reason</label>
		<select
			id="reason"
			name="reason"
			aria-label="reason"
			required
			class="select w-full"
		>
			<option disabled selected value="">Contact reason</option>
			<option value="hi">Say hi!</option>
			<option value="collaboration">Collaboration request</option>
			<option value="speak">Speaking opportunity</option>
		</select>

		<label class="label" for="message">Message</label>
		<textarea
			id="message"
			name="message"
			aria-label="message"
			placeholder="Hey! I'd love to talk about..."
			required
			class="textarea w-full"
		></textarea>

		<button type="submit" class="btn btn-secondary mt-10 w-full">
			Submit
		</button>
	</fieldset>
</form>
