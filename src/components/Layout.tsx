import { PropsWithChildren, useContext } from "react";
import ThemeProvider, { ThemeContext } from "../contexts/ThemeContext";
import { ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";

type LayoutProps = {
	initialTheme: Theme;
};

export default function Layout({ children, initialTheme }: PropsWithChildren<LayoutProps>) {
	return (
		<ThemeProvider initialTheme={initialTheme}>
			<LayoutWithoutThemeProvider>{children}</LayoutWithoutThemeProvider>
		</ThemeProvider>
	);
}

function LayoutWithoutThemeProvider({ children }: PropsWithChildren<{}>) {
	const { theme } = useContext<ThemeContextProps>(ThemeContext);

	return <div className={`container-fluid ${theme.valueOf()}`}>{children}</div>;
}
