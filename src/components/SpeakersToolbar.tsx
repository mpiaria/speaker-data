import { ChangeEvent, useContext } from "react";
import { SpeakerFilterContext, SpeakerFilterContextProps, ThemeContext, ThemeContextProps } from "../types/contexts";
import { retrieveEventYears } from "../types/speaker-data";
import { Theme } from "../types/theme";

export default function SpeakersToolbar() {
	const { eventYear, setEventYear, setSearchQuery, setShowSessions, showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);
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
						<li>
							<div className="input-group">
								<input
									className="form-control"
									onChange={(event: ChangeEvent<HTMLInputElement>): void => setSearchQuery(event.currentTarget.value?.toLowerCase() || "")}
									placeholder="Search..."
									type="text"
								/>
								<div className="input-group-append">
									<button className="btn btn-secondary" type="button">
										<i className="fa fa-search"></i>
									</button>
								</div>
							</div>
						</li>
						<li className="d-flex flex-column flex-md-row">
							<strong>Year</strong>
							<label className="dropmenu">
								<select
									className="form-control"
									onChange={(event: ChangeEvent<HTMLSelectElement>): void => setEventYear(event.currentTarget.value)}
									value={eventYear}
								>
									{retrieveEventYears().map((year: string, index: number) => (
										<option key={index} value={year}>
											{year}
										</option>
									))}
								</select>
							</label>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}
