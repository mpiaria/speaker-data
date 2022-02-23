import { ChangeEvent, useContext } from "react";
import { SpeakerFilterContext } from "../contexts/SpeakerFilterContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { SpeakerFilterContextProps, ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";

export default function SpeakersToolbar() {
	const { setShowSessions, showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
	const { setTheme, theme } = useContext<ThemeContextProps>(ThemeContext);

	return (
		<section className="toolbar dark-theme-header">
			<div className="container">
				<div className="justify-content-between">
					<ul className="toolrow d-flex flex-column flex-lg-row">
						<li className="d-flex flex-column flex-md-row">
							<b>Show Sessions&nbsp;&nbsp;</b>
							<label className="fav">
								<input
									type="checkbox"
									checked={showSessions}
									onChange={(event: ChangeEvent<HTMLInputElement>): void => setShowSessions(event.currentTarget.checked)}
								/>
								<span className="switch"></span>
							</label>
						</li>
						<li className="d-flex flex-column flex-md-row ml-sm-5 ml-0">
							<strong>Theme</strong>
							<label className="dropdown">
								<select
									className="form-control theme"
									value={theme}
									onChange={(event: ChangeEvent<HTMLSelectElement>): void => setTheme(event.currentTarget.value)}
								>
									<option value={Theme.Dark.valueOf()}>Dark</option>
									<option value={Theme.Light.valueOf()}>Light</option>
								</select>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
