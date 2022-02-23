import { SessionData } from "../types/speaker-data";
import Session from "./Session";

type SessionsProps = {
	sessions: SessionData[];
};

export default function Sessions({ sessions }: SessionsProps) {
	return (
		<div className="sessionBox card h-250">
			{sessions.map((session: SessionData, index: number) => (
				<Session key={index} roomName={session.room.name} title={session.title} />
			))}
		</div>
	);
}
