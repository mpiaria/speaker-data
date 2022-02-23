import { MouseEvent, useState } from "react";

type SpeakerFavoriteProps = {
	favorite: boolean;
	toggleFavorite: (callback: () => void) => void;
};

export default function SpeakerFavorite({ favorite, toggleFavorite }: SpeakerFavoriteProps) {
	const [isUpdatingFavorite, setIsUpdatingFavorite] = useState(false);

	return (
		<div className="action paddB1">
			<span
				onClick={(_event: MouseEvent<HTMLElement>) => {
					setIsUpdatingFavorite(true);
					toggleFavorite(() => setIsUpdatingFavorite(false));
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
