import Image from "next/image";
import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";

function Header() {
	const { theme } = useContext<ThemeContextProps>(ThemeContext);

	return (
		<div className="padT4 padB4">
			<div className="container mobile-container">
				<div className="d-flex justify-content-between">
					<div>
						<Image alt="SVCC Home Page" height="25" src="/images/SVCClogo.png" width="100" />
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

export default Header;
