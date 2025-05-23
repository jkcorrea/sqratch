import React from 'react'

import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '#/lib/utils'

function InputOTP({
	className,
	containerClassName,
	...props
}: React.ComponentProps<typeof OTPInput> & {
	containerClassName?: string
}) {
	return (
		<OTPInput
			className={cn('disabled:cursor-not-allowed', className)}
			containerClassName={cn('flex items-center gap-2 has-disabled:opacity-50', containerClassName)}
			data-slot="input-otp"
			{...props}
		/>
	)
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
	return (
		<div className={cn('flex items-center', className)} data-slot="input-otp-group" {...props} />
	)
}

function InputOTPSlot({
	index,
	className,
	...props
}: React.ComponentProps<'div'> & {
	index: number
}) {
	const inputOTPContext = React.useContext(OTPInputContext)
	const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

	return (
		<div
			className={cn(
				'relative flex h-9 w-9 items-center justify-center border-input border-y border-r text-sm shadow-xs outline-ring/50 ring-ring/10 transition-all first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:outline-1 data-[active=true]:ring-4 dark:outline-ring/40 dark:ring-ring/20',
				className,
			)}
			data-active={isActive}
			data-slot="input-otp-slot"
			{...props}
		>
			{char}
			{hasFakeCaret && (
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center">
					<div className="h-4 w-px animate-caret-blink bg-foreground duration-1000" />
				</div>
			)}
		</div>
	)
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
	return (
		<div data-slot="input-otp-separator" role="separator" {...props}>
			<MinusIcon />
		</div>
	)
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
