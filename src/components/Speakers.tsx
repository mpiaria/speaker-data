import SpeakerFilterContextProvider from "../contexts/SpeakerFilterContextProvider";
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

function Speakers() {
	return (
		<SpeakerFilterContextProvider>
			<SpeakersToolbar />
			<SpeakerList />
		</SpeakerFilterContextProvider>
	);
}

export default Speakers;
