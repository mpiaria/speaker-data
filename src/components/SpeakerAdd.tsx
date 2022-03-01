import React from "react";
import { SpeakerData } from "../types/speaker-data";
import { v4 as uuidv4 } from "uuid";

type SpeakerAddProps = {
	eventYear: string;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export default function SpeakerAdd({ eventYear, insertSpeaker }: SpeakerAddProps) {
	return (
		<a className="addSes" href="#">
			<i
				onClick={(event: React.MouseEvent<HTMLElement>): void => {
					event.preventDefault();
					const firstLast = (window.prompt("Enter first and last name:", "")?.concat(" ") || " ").split(" ");
					insertSpeaker(() => {}, {
						bio: "",
						company: "",
						favorite: false,
						firstName: firstLast[0],
						id: uuidv4(),
						lastName: firstLast[1],
						sessions: [
							{
								eventYear,
								id: uuidv4(),
								room: {
									capacity: 0,
									name: "Main Ball Room",
								},
								title: `New Session for ${firstLast[0]}`,
							},
						],
						twitterHandle: "",
					});
				}}
			>
				+
			</i>
		</a>
	);
}
