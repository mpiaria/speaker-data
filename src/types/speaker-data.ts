export type Room = {
	name: string;
	capacity: number;
};

export type SessionData = {
	id: string;
	title: string;
	eventYear: string;
	room: Room;
};

export type SpeakerData = {
	id: string;
	firstName: string;
	lastName: string;
	company: string;
	bio: string;
	twitterHandle: string;
	favorite: boolean;
	sessions: SessionData[];
};

export const retrieveEventYears = (): string[] => ["2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019"];
