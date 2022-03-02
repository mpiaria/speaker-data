import { useState } from "react";

type SpeakerFilterProps = {
	initialEventYear: string;
	initialShowSessions: boolean;
};

function useSpeakerFilter({ initialEventYear, initialShowSessions }: SpeakerFilterProps) {
	const [eventYear, setEventYear] = useState(initialEventYear);
	const [searchQuery, setSearchQuery] = useState("");
	const [showSessions, setShowSessions] = useState(initialShowSessions);
	return { eventYear, searchQuery, setEventYear, setSearchQuery, setShowSessions, showSessions };
}

export default useSpeakerFilter;
