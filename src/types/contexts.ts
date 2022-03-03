import { createContext } from "react";
import { SpeakerData } from "./speaker-data";
import { Theme } from "./theme";

export type AuthContextProps = {
	setUser?: (user: string) => void;
	user?: string;
};

export type SpeakerContextProps = {
	deleteSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	speaker: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

export type SpeakerFilterContextProps = {
	eventYear: string;
	searchQuery: string;
	setEventYear: (eventYear: string) => void;
	setSearchQuery: (searchQuery: string) => void;
	setShowSessions: (showSessions: boolean) => void;
	showSessions: boolean;
};

export type ThemeContextProps = {
	setTheme: (theme: string) => void;
	theme: string;
};

export const AuthContext = createContext<AuthContextProps>({ setUser: (_user: string) => {}, user: "" });

export const SpeakerContext = createContext<SpeakerContextProps>({
	deleteSpeaker: (_callback: () => void, _speaker: SpeakerData) => {},
	insertSpeaker: (_callback: () => void, _speaker: SpeakerData) => {},
	speaker: { bio: "", company: "", favorite: false, firstName: "", id: "", lastName: "", sessions: [], twitterHandle: "" },
	updateSpeaker: (_callback: () => void, _speaker: SpeakerData) => {},
});

export const SpeakerFilterContext = createContext<SpeakerFilterContextProps>({
	eventYear: "",
	searchQuery: "",
	setEventYear: (_eventYear: string) => {},
	setSearchQuery: (_searchQuery: string) => {},
	setShowSessions: (_showSessions: boolean): void => {},
	showSessions: false,
});

export const ThemeContext = createContext<ThemeContextProps>({ setTheme: (_theme: string): void => {}, theme: Theme.Dark.valueOf() });
