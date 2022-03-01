import React, { useContext } from "react";
import { SpeakerContext, SpeakerContextProps } from "../types/contexts";

export default function SpeakerDelete() {
	const { deleteSpeaker, speaker } = useContext<SpeakerContextProps>(SpeakerContext);
	return (
		<span className="session w-100">
			<a className="remSes" href="#">
				<i
					onClick={(event: React.MouseEvent<HTMLElement>): void => {
						event.preventDefault();
						if (window.confirm("Are you sure you want to delete this speaker?")) {
							deleteSpeaker(() => {}, speaker);
						}
					}}
				>
					-
				</i>
			</a>
			<span className="padL2">Delete Speaker</span>
		</span>
	);
}
