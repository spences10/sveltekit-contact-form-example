<script lang="ts">
	import type { ActionResult } from '@sveltejs/kit';
	import { elasticOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import ContactFormFailure from './contact-form-failure.svelte';
	import ContactFormFields from './contact-form-fields.svelte';
	import ContactFormSuccess from './contact-form-success.svelte';

	let action_result: ActionResult;
	let success = false;
	let message_type: 'error' | 'success' = 'error';

	const handle_result = (result: ActionResult) => {
		action_result = result;
		if (result.type === 'success') {
			success = true;
		} else if (result.type === 'failure') {
			message_type = 'error';
		}
	};

	// https://learn.svelte.dev/tutorial/custom-css-transitions
	export const spin = (
		node: HTMLDivElement,
		{ delay, duration }: { delay: number; duration: number }
	) => {
		return {
			delay,
			duration,
			css: (t: any) => {
				const eased = elasticOut(t);
				return `
          transform: scale(${eased}) rotate(${eased * 360}deg);
          `;
			}
		};
	};
</script>

{#if success}
	<div in:spin={{ delay: 900, duration: 1400 }}>
		<ContactFormSuccess />
	</div>
{:else if action_result?.type === 'failure'}
	<div in:spin={{ delay: 900, duration: 1400 }}>
		<ContactFormFailure />
	</div>
{:else}
	<div out:fade={{ delay: 200, duration: 400 }}>
		<ContactFormFields {handle_result} />
	</div>
{/if}

<div class="divider my-20" />
