import { PropsWithChildren } from "react";
import useTheme from "../hooks/use-theme";
import { ThemeContext } from "../types/contexts";
import { Theme } from "../types/theme";

type ThemeProviderProps = {
	initialTheme: Theme;
};

export default function ThemeContextProvider({ children, initialTheme }: PropsWithChildren<ThemeProviderProps>) {
	const { setTheme, theme } = useTheme(initialTheme);

	return <ThemeContext.Provider value={{ setTheme, theme }}>{children}</ThemeContext.Provider>;
}
