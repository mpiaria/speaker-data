import { createContext, PropsWithChildren } from "react";
import useSpeakerFilter from "../hooks/use-speaker-filter";
import { SpeakerFilterContextProps } from "../types/contexts";

type SpeakerFilterProviderProps = {
	initialShowSessions: boolean;
};

export const SpeakerFilterContext = createContext<SpeakerFilterContextProps>({ setShowSessions: (_showSessions: boolean): void => {}, showSessions: false });

export default function SpeakerFilterProvider({ children, initialShowSessions = false }: PropsWithChildren<SpeakerFilterProviderProps>) {
	const { setShowSessions, showSessions } = useSpeakerFilter({ initialShowSessions });

	return <SpeakerFilterContext.Provider value={{ setShowSessions, showSessions }}>{children}</SpeakerFilterContext.Provider>;
}
