import { createContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const contextValue = {
		user,
		login() {
			setUser({ email: "cora@test.com", password: "cora1234" })

		},
		logout() {
			setUser(null);
		},
		islogged() {
			return !!user;
		}
	}
	return <AuthContext.Provider value={contextValue}>
		{children}
	</AuthContext.Provider>
}

export default AuthProvider