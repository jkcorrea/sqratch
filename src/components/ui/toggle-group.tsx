import React from 'react'

import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '#/lib/utils'

import { toggleVariants } from './toggle'

const ToggleGroupContext = React.createContext<VariantProps<typeof toggleVariants>>({
	size: 'default',
	variant: 'default',
})

function ToggleGroup({
	className,
	variant,
	size,
	children,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>) {
	return (
		<ToggleGroupPrimitive.Root
			className={cn(
				'group/toggle-group flex items-center justify-center rounded-md data-[variant=outline]:shadow-xs',
				className,
			)}
			data-size={size}
			data-slot="toggle-group"
			data-variant={variant}
			{...props}
		>
			<ToggleGroupContext.Provider value={{ variant, size }}>
				{children}
			</ToggleGroupContext.Provider>
		</ToggleGroupPrimitive.Root>
	)
}

function ToggleGroupItem({
	className,
	children,
	variant,
	size,
	...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>) {
	const context = React.useContext(ToggleGroupContext)

	return (
		<ToggleGroupPrimitive.Item
			className={cn(
				toggleVariants({
					variant: context.variant || variant,
					size: context.size || size,
				}),
				'min-w-0 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
				className,
			)}
			data-size={context.size || size}
			data-slot="toggle-group-item"
			data-variant={context.variant || variant}
			{...props}
		>
			{children}
		</ToggleGroupPrimitive.Item>
	)
}

export { ToggleGroup, ToggleGroupItem }
