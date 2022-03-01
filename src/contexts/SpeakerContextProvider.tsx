import { PropsWithChildren } from "react";
import { SpeakerContext } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";

type SpeakerContextProviderProps = {
	deleteSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	speaker: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function SpeakerContextProvider({
	children,
	deleteSpeaker,
	insertSpeaker,
	speaker,
	updateSpeaker,
}: PropsWithChildren<SpeakerContextProviderProps>) {
	return <SpeakerContext.Provider value={{ deleteSpeaker, insertSpeaker, speaker, updateSpeaker }}>{children}</SpeakerContext.Provider>;
}
