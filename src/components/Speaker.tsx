import { SpeakerData } from "../types/speaker-data";
import Sessions from "./Sessions";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";

type SpeakerProps = {
	showSessions: boolean;
	speakerData: SpeakerData;
	toggleFavorite: (callback: () => void) => void;
};

export default function Speaker({ showSessions, speakerData, toggleFavorite }: SpeakerProps) {
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
