interface ModalProps {
	children: React.ReactNode
	title: string
	onClose: () => void
}

export function Modal({ children, title, onClose }: ModalProps) {
	return (
		<>
			<div onClick={onClose} className="fixed bg-black/80 top-0 right-0 left-0 bottom-0 " />
			<div className="w-[600px] p-6 rounded-lg bg-slate-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				<h2 className="text-2xl text-center mb-3">
					{title}
				</h2>
				{children}
			</div>
		</>
	)
}