import axios from "axios";
import { useEffect, useState } from "react";
import { LoadingStatus } from "../types/loading-status";
import { SpeakerData } from "../types/speaker-data";

type RequestSpeakersProps = {
	deleteSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	errorMessage: string;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	loadingStatus: LoadingStatus;
	speakerData: SpeakerData[];
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

const restUrl = "api/speakers";

export default function useApiCalls(): RequestSpeakersProps {
	const [errorMessage, setErrorMessage] = useState("");
	const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Loading);
	const [speakerData, setSpeakerData] = useState([] as SpeakerData[]);

	const deleteSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function deleteWithDelay() {
			try {
				await axios.delete(`${restUrl}/${speaker.id}`);
				setLoadingStatus(LoadingStatus.Loading);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		deleteWithDelay();
	};

	const insertSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function insertWithDelay() {
			try {
				await axios.post<SpeakerData>(restUrl, speaker);
				setLoadingStatus(LoadingStatus.Loading);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		insertWithDelay();
	};

	const updateSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function updateWithDelay() {
			try {
				await axios.put<void>(`${restUrl}/${speaker.id}`, speaker);
				setLoadingStatus(LoadingStatus.Loading);
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
				const result = await axios.get<SpeakerData[]>(restUrl);
				setSpeakerData(result.data);
				setLoadingStatus(LoadingStatus.Successful);
			} catch (error) {
				setErrorMessage(String(error));
				setLoadingStatus(LoadingStatus.Failed);
			}
		}
		loadSpeakersWithDelay();
	}, [loadingStatus]);

	return { deleteSpeaker, errorMessage, insertSpeaker, loadingStatus, speakerData: speakerData, updateSpeaker };
}
