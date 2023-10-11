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
	class="form-control bg-base-300 shadow-md rounded-box p-6 w-full"
>
	<label for="name" class="label">
		<span class="label-text">Name</span>
	</label>
	<input
		type="text"
		id="name"
		name="name"
		aria-label="name"
		placeholder="Name"
		required
		class="input"
	/>
	<label for="email" class="label">
		<span class="label-text">Email</span>
	</label>
	<input
		type="email"
		id="email"
		name="email"
		aria-label="email"
		placeholder="Email"
		required
		class="input"
	/>
	<!-- honeypot, the value should be empty -->
	<input type="text" name="subject" id="subject" class="hidden" value="speak"/>
	<label for="reason" class="label">
		<span class="label-text">Reason</span>
	</label>
	<select
		id="reason"
		name="reason"
		aria-label="reason"
		required
		class="input"
	>
		<option disabled selected value="">Contact reason</option>
		<option value="hi">Say hi!</option>
		<option value="collaboration">Collaboration request</option>
		<option value="speak">Speaking opportunity</option>
	</select>
	<label for="message" class="label">
		<span class="label-text">Message</span>
	</label>
	<textarea
		id="message"
		name="message"
		aria-label="message"
		placeholder="Hey! I'd love to talk about..."
		required
		class="textarea"
	/>
	<button type="submit" class="btn btn-secondary mt-10">Submit</button
	>
</form>
