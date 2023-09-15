interface ErrorMessageProps {
	error: string
}

export function ErrorMessage({ error }: ErrorMessageProps) {
	return (
		<>
			<p className=" text-red-700 font-semibold tracking-wide">{error}</p>
		</>
	)
}