import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { SpeakerContext, SpeakerContextProps } from "../types/contexts";

function SpeakerImage() {
	const {
		speaker: { firstName, id, lastName },
	} = useContext<SpeakerContextProps>(SpeakerContext);
	const [error, setError] = useState(false);
	const [source, setSource] = useState(`/images/speaker-${id}`);

	useEffect((): void | (() => void) => {
		setSource(`/images/speaker-${id}.jpg`);
	}, [id]);

	const onError: () => void = () => {
		if (!error) {
			setSource("/images/speaker-99999.jpg");
			setError(true);
		}
	};

	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
			<Image alt={`${firstName} ${lastName}`} className="contain-fit" height="300" onError={onError} src={source} width="300" />
		</div>
	);
}

export default SpeakerImage;
