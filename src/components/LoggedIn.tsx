import React from "react";

type LoggedInProps = {
	setUser: (user: string) => void;
	user: string;
};

function LoggedIn({ setUser, user }: LoggedInProps) {
	return (
		<div>
			<span>Logged in as {user} </span>
			<button className="btn btn-secondary" onClick={(_event: React.MouseEvent<HTMLButtonElement>): void => setUser("")}>
				Logout
			</button>
		</div>
	);
}

export default LoggedIn;
