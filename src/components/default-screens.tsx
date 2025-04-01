import { AppLink } from '#/components/app-link'

import Icons from './icons'
export function DefaultNotFound() {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center pb-12">
			<h1 className="mb-4 font-medium text-2xl">Page not found</h1>

			<AppLink size="sm" to="/" variant="default">
				Go to Home
			</AppLink>
		</div>
	)
}

export function DefaultPending() {
	return (
		<div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 self-center">
			<Icons.Loader2 className="h-4 w-4 animate-spin" />
			<div className="text-muted-foreground text-sm">Loading...</div>
		</div>
	)
}
