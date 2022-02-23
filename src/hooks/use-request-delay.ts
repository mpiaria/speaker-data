import { useEffect, useState } from "react";
import { LoadingStatus } from "../types/loading-status";
import { retrieveSpeakerData, SpeakerData } from "../types/speaker-data";

type RequestSpeakersProps = {
	errorMessage: string;
	loadingStatus: LoadingStatus;
	speakerData: SpeakerData[];
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function useRequestDelay(delayInMillis: number = 1000, initialData: SpeakerData[] = []): RequestSpeakersProps {
	const [errorMessage, setErrorMessage] = useState("");
	const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Loading);
	const [speakerData, setSpeakerData] = useState(initialData);

	const delay = async (millis: number): Promise<void> => new Promise((resolve: (val: void) => void) => setTimeout(resolve, millis));

	const updateSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		const updatedSpeakers = speakerData.map((s: SpeakerData): SpeakerData => (speaker?.id === s.id ? speaker : s));
		async function updateWithDelay() {
			try {
				await delay(delayInMillis);
				setSpeakerData(updatedSpeakers);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		updateWithDelay();
	};

	useEffect((): void | (() => void) => {
		async function loadSpeakersWithDelay(): Promise<void> {
			try {
				await delay(delayInMillis);
				setSpeakerData(retrieveSpeakerData());
				setLoadingStatus(LoadingStatus.Successful);
			} catch (error) {
				setErrorMessage(String(error));
				setLoadingStatus(LoadingStatus.Failed);
			}
		}
		loadSpeakersWithDelay();
	}, [delayInMillis]);

	return { errorMessage, loadingStatus, speakerData: speakerData, updateSpeaker };
}
