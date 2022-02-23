import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay from "../hooks/use-request-delay";
import { LoadingStatus } from "../types/loading-status";
import { retrieveSpeakerData, SpeakerData } from "../types/speaker-data";
import Speaker from "./Speaker";

export default function SpeakerList() {
	const { errorMessage, loadingStatus, speakerData, updateSpeaker } = useRequestDelay(2000, retrieveSpeakerData());

	return loadingStatus === LoadingStatus.Failed ? (
		<div className="text-danger">
			<b>ERROR:</b> Loading speaker data failed - {errorMessage}
		</div>
	) : (
		<div className="container speakers-list">
			<ReactPlaceholder className="speakerslist-placeholder" ready={loadingStatus === LoadingStatus.Successful} rows={15} type="media">
				<div className="row">
					{speakerData.map((speaker: SpeakerData, index: number) => (
						<Speaker
							key={index}
							speakerData={speaker}
							toggleFavorite={(callback: () => void) => updateSpeaker(callback, { ...speaker, favorite: !speaker.favorite })}
						/>
					))}
				</div>
			</ReactPlaceholder>
		</div>
	);
}
