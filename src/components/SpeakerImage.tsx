import Image, { ImageProps } from "next/image";
import { useContext, useState } from "react";
import { SpeakerContext, SpeakerContextProps } from "../types/contexts";

export default function SpeakerImage() {
	const {
		speaker: { firstName, id, lastName },
	} = useContext<SpeakerContextProps>(SpeakerContext);

	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
			<ImageWithFallback alt={`${firstName} ${lastName}`} className="contain-fit" height="300" src={`/images/speaker-${id}.jpg`} width="300" />
		</div>
	);
}

function ImageWithFallback({ alt, src, ...props }: ImageProps) {
	const [error, setError] = useState(false);
	const [source, setSource] = useState(src);

	const onError: () => void = () => {
		if (!error) {
			setSource("/images/speaker-99999.jpg");
			setError(true);
		}
	};

	return <Image alt={alt} onError={onError} src={source} {...props} />;
}
