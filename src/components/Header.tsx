import Image from "next/image";
import { useContext } from "react";
import { AuthContextProps, ThemeContext, ThemeContextProps } from "../types/contexts";
import { Theme } from "../types/theme";
import LoggedIn from "./LoggedIn";
import NotLoggedIn from "./NotLoggedIn";
import withAuth from "./with-auth";
import { isEmpty } from "lodash";

function Header({ setUser = (_user: string) => {}, user = "" }: AuthContextProps) {
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
						{isEmpty(user) ? <NotLoggedIn setUser={setUser} user={user} /> : <LoggedIn setUser={setUser} user={user} />}
					</div>
				</div>
			</div>
		</div>
	);
}

export default withAuth(Header);
