import { useState } from "react";
import { Theme } from "../types/theme";

function useTheme(initialTheme = Theme.Dark.valueOf()) {
	const [theme, setTheme] = useState(initialTheme);

	return {
		setTheme: (initialTheme: string): void => (initialTheme === Theme.Dark.valueOf() ? setTheme(Theme.Dark.valueOf()) : setTheme(Theme.Light.valueOf())),
		theme,
	};
}

export default useTheme;
