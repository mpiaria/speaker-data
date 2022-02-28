import { useContext } from "react";
import { SpeakerContext, SpeakerContextProps, SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { SessionData } from "../types/speaker-data";
import Session from "./Session";

export default function Sessions() {
	const {
		speaker: { sessions },
	} = useContext<SpeakerContextProps>(SpeakerContext);
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
