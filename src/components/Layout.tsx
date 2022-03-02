import { PropsWithChildren, useContext } from "react";
import ThemeContextProvider from "../contexts/ThemeContextProvider";
import { ThemeContext, ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";

type LayoutProps = {
	initialTheme: Theme;
};

function Layout({ children, initialTheme }: PropsWithChildren<LayoutProps>) {
	return (
		<ThemeContextProvider initialTheme={initialTheme}>
			<LayoutWithoutThemeProvider>{children}</LayoutWithoutThemeProvider>
		</ThemeContextProvider>
	);
}

function LayoutWithoutThemeProvider({ children }: PropsWithChildren<{}>) {
	const { theme } = useContext<ThemeContextProps>(ThemeContext);

	return <div className={`container-fluid ${theme.valueOf()}`}>{children}</div>;
}

export default Layout;
