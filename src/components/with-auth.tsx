import React, { useContext } from "react";
import { AuthContext, AuthContextProps } from "../types/contexts";

function withAuth<P extends object>(Component: React.ComponentType<P>) {
	return function EnhancedComponent(props: P) {
		const { setUser, user } = useContext<AuthContextProps>(AuthContext);
		return <Component setUser={setUser} user={user} {...props} />;
	};
}

export default withAuth;
