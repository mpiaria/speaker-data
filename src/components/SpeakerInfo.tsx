import SpeakerFavorite from "./SpeakerFavorite";

type SpeakerInfoProps = {
	bio: string;
	company: string;
	favorite: boolean;
	firstName: string;
	lastName: string;
	toggleFavorite: (callback: () => void) => void;
	twitterHandle: string;
};

export default function SpeakerInfo({ bio, company, favorite, firstName, lastName, toggleFavorite, twitterHandle }: SpeakerInfoProps) {
	return (
		<div className="speaker-info">
			<div className="d-flex justify-content-between mb-3">
				<h3 className="text-truncate w-200">
					{firstName} {lastName}
				</h3>
			</div>
			<SpeakerFavorite favorite={favorite} toggleFavorite={toggleFavorite} />
			<div>
				<p className="card-description">{bio}</p>
				<div className="social d-flex flex-row mt-4">
					<div className="company">
						<h5>Company</h5>
						<h6>{company}</h6>
					</div>
					<div className="twitter">
						<h5>Twitter</h5>
						<h6>{twitterHandle}</h6>
					</div>
				</div>
			</div>
		</div>
	);
}
