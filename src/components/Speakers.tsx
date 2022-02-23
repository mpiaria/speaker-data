import { useState } from "react";
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

export default function Speakers() {
	const [showSessions, setShowSessions] = useState(true);

	return (
		<>
			<SpeakersToolbar setShowSessions={setShowSessions} showSessions={showSessions} />
			<SpeakerList showSessions={showSessions} />
		</>
	);
}
