import { useState } from "react";

type SpeakerFilterProps = {
	initialShowSessions: boolean;
};

export default function useSpeakerFilter({ initialShowSessions }: SpeakerFilterProps) {
	const [showSessions, setShowSessions] = useState(initialShowSessions);
	return { setShowSessions, showSessions };
}
