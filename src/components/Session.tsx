type SessionProps = {
	roomName: string;
	title: string;
};

export default function Session({ roomName, title }: SessionProps) {
	return (
		<span className="session w-100">
			{title} <strong>Room: {roomName}</strong>
		</span>
	);
}
