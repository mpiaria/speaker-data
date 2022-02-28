import { PropsWithChildren } from "react";
import { SpeakerContext } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";

type SpeakerContextProviderProps = {
	speaker: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function SpeakerContextProvider({ children, speaker, updateSpeaker }: PropsWithChildren<SpeakerContextProviderProps>) {
	return <SpeakerContext.Provider value={{ speaker, updateSpeaker }}>{children}</SpeakerContext.Provider>;
}
