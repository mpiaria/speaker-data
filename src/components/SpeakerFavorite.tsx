import { MouseEvent, useContext, useState } from "react";
import { SpeakerContext, SpeakerContextProps } from "../types/contexts";

export default function SpeakerFavorite() {
	const { speaker, updateSpeaker } = useContext<SpeakerContextProps>(SpeakerContext);
	const [isUpdatingFavorite, setIsUpdatingFavorite] = useState(false);
	const { favorite } = speaker;

	return (
		<div className="action paddB1">
			<span
				onClick={(_event: MouseEvent<HTMLElement>) => {
					setIsUpdatingFavorite(true);
					updateSpeaker(() => setIsUpdatingFavorite(false), { ...speaker, favorite: !speaker.favorite });
				}}
			>
				<i className={`fa orange ${favorite ? "fa-star" : "fa-star-o"}`} /> Favorite
				{isUpdatingFavorite ? (
					<>
						&nbsp;<span className="fas fa-circle-notch fa-spin"></span>
					</>
				) : null}
			</span>
		</div>
	);
}
