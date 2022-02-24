import { useContext } from "react";
import { SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { SessionData } from "../types/speaker-data";
import Session from "./Session";

type SessionsProps = {
	sessions: SessionData[];
};

export default function Sessions({ sessions }: SessionsProps) {
	const { eventYear } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	return (
		<div className="sessionBox card h-250">
			{sessions
				.filter((session: SessionData): boolean => session.eventYear === eventYear)
				.map((session: SessionData, index: number) => (
					<Session key={index} roomName={session.room.name} title={session.title} />
				))}
		</div>
	);
}
