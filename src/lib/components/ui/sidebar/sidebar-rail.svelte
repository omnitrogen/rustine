<script lang="ts">
	import type { WithElementRef } from 'bits-ui';
	import type { HTMLAttributes } from 'svelte/elements';

	import { cn } from '$lib/utils.js';

	import { useSidebar } from './context.svelte.js';

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> = $props();

	const sidebar = useSidebar();
</script>

<button
	aria-label="Toggle Sidebar"
	bind:this={ref}
	class={cn(
		'absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex',
		'[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize',
		'[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
		'group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar',
		'[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
		'[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
		className
	)}
	data-sidebar="rail"
	onclick={() => sidebar.toggle()}
	tabIndex={-1}
	title="Toggle Sidebar"
	{...restProps}
>
	{@render children?.()}
</button>
