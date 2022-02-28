import { useContext } from "react";
import SpeakerContextProvider from "../contexts/SpeakerContextProvider";
import { SpeakerContext, SpeakerContextProps, SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";
import Sessions from "./Sessions";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";

type SpeakerProps = {
	speakerData: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function Speaker({ speakerData, updateSpeaker }: SpeakerProps) {
	const { showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	const { firstName, id, lastName, sessions } = speakerData;

	return (
		<SpeakerContextProvider speaker={speakerData} updateSpeaker={updateSpeaker}>
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
				<div className="card card-height p-4 mt-4">
					<SpeakerImage />
					<SpeakerInfo />
				</div>
				{showSessions ? <Sessions /> : null}
			</div>
		</SpeakerContextProvider>
	);
}
