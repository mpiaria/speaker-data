import { useContext } from "react";
import SpeakerContextProvider from "../contexts/SpeakerContextProvider";
import { SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";
import Sessions from "./Sessions";
import SpeakerDelete from "./SpeakerDelete";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";

type SpeakerProps = {
	deleteSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	speakerData: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function Speaker({ deleteSpeaker, insertSpeaker, speakerData, updateSpeaker }: SpeakerProps) {
	const { showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);

	return (
		<SpeakerContextProvider deleteSpeaker={deleteSpeaker} insertSpeaker={insertSpeaker} speaker={speakerData} updateSpeaker={updateSpeaker}>
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
				<div className="card card-height p-4 mt-4">
					<SpeakerImage />
					<SpeakerInfo />
				</div>
				{showSessions ? <Sessions /> : null}
				<SpeakerDelete />
			</div>
		</SpeakerContextProvider>
	);
}
