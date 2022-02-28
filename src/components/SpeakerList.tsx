import { useContext } from "react";
import ReactPlaceholder from "react-placeholder/lib";
import useRequestDelay from "../hooks/use-request-delay";
import { SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { LoadingStatus } from "../types/loading-status";
import { retrieveSpeakerData, SessionData, SpeakerData } from "../types/speaker-data";
import Speaker from "./Speaker";

export default function SpeakerList() {
	const { eventYear, searchQuery } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	const { errorMessage, loadingStatus, speakerData, updateSpeaker } = useRequestDelay(2000, retrieveSpeakerData());

	return loadingStatus === LoadingStatus.Failed ? (
		<div className="text-danger">
			<b>ERROR:</b> Loading speaker data failed - {errorMessage}
		</div>
	) : (
		<div className="container speakers-list">
			<ReactPlaceholder className="speakerslist-placeholder" ready={loadingStatus === LoadingStatus.Successful} rows={15} type="media">
				<div className="row">
					{speakerData
						.filter((speaker: SpeakerData): boolean => speaker.sessions.some((session: SessionData): boolean => session.eventYear === eventYear))
						.filter(
							(speaker: SpeakerData): boolean =>
								speaker.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || speaker.lastName.toLowerCase().includes(searchQuery.toLowerCase()),
						)
						.map((speaker: SpeakerData, index: number) => (
							<Speaker key={index} speakerData={speaker} updateSpeaker={updateSpeaker} />
						))}
				</div>
			</ReactPlaceholder>
		</div>
	);
}
