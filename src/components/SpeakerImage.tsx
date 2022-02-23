import Image from "next/image";

type SpeakerImageProps = {
	firstName: string;
	id: string;
	lastName: string;
};

export default function SpeakerImage({ firstName, id, lastName }: SpeakerImageProps) {
	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
			<Image alt={`${firstName} ${lastName}`} className="contain-fit" height="300" src={`/images/speaker-${id}.jpg`} width="300" />
		</div>
	);
}
