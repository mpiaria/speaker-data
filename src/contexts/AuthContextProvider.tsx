import { PropsWithChildren, useState } from "react";
import { AuthContext } from "../types/contexts";

type AuthContextProviderProps = {
	initialUser: string;
};

function AuthContextProvider({ children, initialUser }: PropsWithChildren<AuthContextProviderProps>) {
	const [user, setUser] = useState(initialUser);
	return <AuthContext.Provider value={{ setUser, user }}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
