import React from 'react'

import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '#/lib/utils'

function ScrollArea({
	className,
	children,
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
	return (
		<ScrollAreaPrimitive.Root
			className={cn('relative', className)}
			data-slot="scroll-area"
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				className="size-full rounded-[inherit] outline-ring/50 ring-ring/10 transition-[color,box-shadow] focus-visible:outline-1 focus-visible:ring-4 dark:outline-ring/40 dark:ring-ring/20"
				data-slot="scroll-area-viewport"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollBar />
			<ScrollAreaPrimitive.Corner />
		</ScrollAreaPrimitive.Root>
	)
}

function ScrollBar({
	className,
	orientation = 'vertical',
	...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
	return (
		<ScrollAreaPrimitive.ScrollAreaScrollbar
			className={cn(
				'flex touch-none select-none p-px transition-colors',
				orientation === 'vertical' && 'h-full w-2.5 border-l border-l-transparent',
				orientation === 'horizontal' && 'h-2.5 flex-col border-t border-t-transparent',
				className,
			)}
			data-slot="scroll-area-scrollbar"
			orientation={orientation}
			{...props}
		>
			<ScrollAreaPrimitive.ScrollAreaThumb
				className="relative flex-1 rounded-none bg-border"
				data-slot="scroll-area-thumb"
			/>
		</ScrollAreaPrimitive.ScrollAreaScrollbar>
	)
}

export { ScrollArea, ScrollBar }
