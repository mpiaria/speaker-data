import { useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { SpeakerFilterContextProps } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";
import Sessions from "./Sessions";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";

type SpeakerProps = {
	speakerData: SpeakerData;
	toggleFavorite: (callback: () => void) => void;
};

export default function Speaker({ speakerData, toggleFavorite }: SpeakerProps) {
	const { showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	const { firstName, id, lastName, sessions } = speakerData;

	return (
		<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
			<div className="card card-height p-4 mt-4">
				<SpeakerImage firstName={firstName} id={id} lastName={lastName} />
				<SpeakerInfo {...speakerData} toggleFavorite={toggleFavorite} />
			</div>
			{showSessions ? <Sessions sessions={sessions} /> : null}
		</div>
	);
}
