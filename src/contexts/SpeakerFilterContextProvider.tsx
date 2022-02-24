import { PropsWithChildren } from "react";
import useSpeakerFilter from "../hooks/use-speaker-filter";
import { SpeakerFilterContext } from "../types/contexts";

type SpeakerFilterProviderProps = {
	initialShowSessions?: boolean;
	initialEventYear?: string;
};

export default function SpeakerFilterContextProvider({
	children,
	initialShowSessions = false,
	initialEventYear = "2019",
}: PropsWithChildren<SpeakerFilterProviderProps>) {
	const { eventYear, searchQuery, setEventYear, setSearchQuery, setShowSessions, showSessions } = useSpeakerFilter({ initialEventYear, initialShowSessions });

	return (
		<SpeakerFilterContext.Provider value={{ eventYear, searchQuery, setEventYear, setSearchQuery, setShowSessions, showSessions }}>
			{children}
		</SpeakerFilterContext.Provider>
	);
}
