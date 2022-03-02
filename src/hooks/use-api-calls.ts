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

function useRestApi(): RequestSpeakersProps {
	const [errorMessage, setErrorMessage] = useState("");
	const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.Loading);
	const [speakerData, setSpeakerData] = useState([] as SpeakerData[]);

	const deleteSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function deleteAsynchronously() {
			try {
				await axios.delete(`${restUrl}/${speaker.id}`);
        const result = await axios.get<SpeakerData[]>(restUrl);
				setSpeakerData(result.data);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		deleteAsynchronously();
	};

	const insertSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function insertAsynchronously() {
			try {
				await axios.post<SpeakerData>(restUrl, speaker);
        const result = await axios.get<SpeakerData[]>(restUrl);
				setSpeakerData(result.data);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		insertAsynchronously();
	};

	const updateSpeaker = (callback: () => void, speaker: SpeakerData): void => {
		async function updateAsynchronously() {
			try {
				await axios.put<void>(`${restUrl}/${speaker.id}`, speaker);
        const result = await axios.get<SpeakerData[]>(restUrl);
				setSpeakerData(result.data);
				if (callback) {
					callback();
				}
			} catch (error) {
				console.log("error thrown in updateWithDelay:", error);
			}
		}
		updateAsynchronously();
	};

	useEffect((): void | (() => void) => {
		async function retrieveAsynchronously(): Promise<void> {
			try {
				const result = await axios.get<SpeakerData[]>(restUrl);
				setSpeakerData(result.data);
				setLoadingStatus(LoadingStatus.Successful);
			} catch (error) {
				setErrorMessage(String(error));
				setLoadingStatus(LoadingStatus.Failed);
			}
		}
		retrieveAsynchronously();
	}, []);

	return { deleteSpeaker, errorMessage, insertSpeaker, loadingStatus, speakerData: speakerData, updateSpeaker };
}

export default useRestApi;
