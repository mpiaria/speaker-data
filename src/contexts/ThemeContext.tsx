import { createContext, PropsWithChildren } from "react";
import useTheme from "../hooks/use-theme";
import { ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";

type ThemeProviderProps = {
	initialTheme: Theme;
};

export const ThemeContext = createContext<ThemeContextProps>({ setTheme: (_theme: string): void => {}, theme: Theme.Dark.valueOf() });

export default function ThemeProvider({ children, initialTheme }: PropsWithChildren<ThemeProviderProps>) {
	const { setTheme, theme } = useTheme(initialTheme);

	return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>;
}
