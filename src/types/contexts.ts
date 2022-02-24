import { createContext } from "react";
import { Theme } from "./theme";

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

export const SpeakerFilterContext = createContext<SpeakerFilterContextProps>({
	eventYear: "",
	searchQuery: "",
	setEventYear: (_eventYear: string) => {},
	setSearchQuery: (_searchQuery: string) => {},
	setShowSessions: (_showSessions: boolean): void => {},
	showSessions: false,
});

export const ThemeContext = createContext<ThemeContextProps>({ setTheme: (_theme: string): void => {}, theme: Theme.Dark.valueOf() });
