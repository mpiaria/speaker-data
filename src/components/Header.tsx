import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { Theme } from "../types/theme";

export default function Header() {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="padT4 padB4">
			<div className="container mobile-container">
				<div className="d-flex justify-content-between">
					<div>
						<Image alt="SVCC Home Page" height="25" src="/images/SVCCLogo.png" width="100" />
					</div>
					<div className="light">
						<h4 className="header-title">Silicon Valley Code Camp</h4>
					</div>
					<div className={theme === Theme.Light.valueOf() ? "" : "text-info"}>
						Hello, Mr. Smith &nbsp;&nbsp;
						<span>
							<a href="#">Sign Out</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
