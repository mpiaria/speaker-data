import SpeakerFilterContextProvider from "../contexts/SpeakerFilterContextProvider";
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

export default function Speakers() {
	return (
		<SpeakerFilterContextProvider>
			<SpeakersToolbar />
			<SpeakerList />
		</SpeakerFilterContextProvider>
	);
}
