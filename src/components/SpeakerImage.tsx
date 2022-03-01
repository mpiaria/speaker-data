import Image from "next/image";
import { useContext } from "react";
import { SpeakerContext, SpeakerContextProps } from "../types/contexts";

export default function SpeakerImage() {
	const {
		speaker: { firstName, id, lastName },
	} = useContext<SpeakerContextProps>(SpeakerContext);

	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
			<Image
				alt={`${firstName} ${lastName}`}
				className="contain-fit"
				height="300"
				src={Number.isNaN(+id) || Number.parseInt(id) > 99999 ? `/images/speaker-99999.jpg` : `/images/speaker-${id}.jpg`}
				width="300"
			/>
		</div>
	);
}
