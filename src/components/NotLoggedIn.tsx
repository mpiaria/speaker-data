type NotLoggedInProps = {
	setUser: (user: string) => void;
	user: string;
};

function NotLoggedIn({ setUser, user }: NotLoggedInProps) {
	return (
		<div>
			<button
				className="btn btn-secondary"
				onClick={(event: React.MouseEvent<HTMLButtonElement>): void => {
					event.preventDefault();
					setUser(window.prompt("Enter Login Name:") || "");
				}}
			>
				Login
			</button>
		</div>
	);
}

export default NotLoggedIn;
