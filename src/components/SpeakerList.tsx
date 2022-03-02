import { useContext } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import useRestApi from "../hooks/use-api-calls";
import { SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { LoadingStatus } from "../types/loading-status";
import { SessionData, SpeakerData } from "../types/speaker-data";
import Speaker from "./Speaker";
import SpeakerAdd from "./SpeakerAdd";

function SpeakerList() {
	const { eventYear, searchQuery } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	const { deleteSpeaker, errorMessage, insertSpeaker, loadingStatus, speakerData, updateSpeaker } = useRestApi();

	return loadingStatus === LoadingStatus.Failed ? (
		<div className="text-danger">
			<b>ERROR:</b> Loading speaker data failed - {errorMessage}
		</div>
	) : (
		<div className="container speakers-list">
			<ReactPlaceholder className="speakerslist-placeholder" ready={loadingStatus === LoadingStatus.Successful} rows={15} type="media">
				<SpeakerAdd eventYear={eventYear} insertSpeaker={insertSpeaker} />
				<div className="row">
					{speakerData
						.filter((speaker: SpeakerData): boolean => speaker.sessions.some((session: SessionData): boolean => session.eventYear === eventYear))
						.filter(
							(speaker: SpeakerData): boolean =>
								speaker.firstName?.toLowerCase()?.includes(searchQuery.toLowerCase()) || speaker.lastName?.toLowerCase()?.includes(searchQuery.toLowerCase()),
						)
						.map((speaker: SpeakerData, index: number) => (
							<Speaker deleteSpeaker={deleteSpeaker} insertSpeaker={insertSpeaker} key={index} speakerData={speaker} updateSpeaker={updateSpeaker} />
						))}
				</div>
			</ReactPlaceholder>
		</div>
	);
}

export default SpeakerList;
