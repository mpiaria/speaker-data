import SpeakerFilterProvider from "../contexts/SpeakerFilterContext";
import SpeakerList from "./SpeakerList";
import SpeakersToolbar from "./SpeakersToolbar";

export default function Speakers() {
	return (
		<SpeakerFilterProvider initialShowSessions={false}>
			<SpeakersToolbar />
			<SpeakerList />
		</SpeakerFilterProvider>
	);
}
