import { account } from "@/client"
import { createContext, useContext, useEffect, useState } from "react"
import { Models } from "react-native-appwrite"

interface UserContext {
    user: Models.User<Models.Preferences> | null
}

const UserContext = createContext<UserContext | null>(null)
export const useUser = () => {
    const context = useContext(UserContext)
    if (!context) {
        throw new Error("useUser must be used within a UserProvider")
    }
    return context
}


export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<any>(null)

    const init = async () => {
        try {
            const user = await account.get()
            setUser(user)
            console.log("Welcome back", user.name);
        } catch (error) {
            setUser(null)
        }
    }

    useEffect(() => {
        init()
    }, [])

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    )
}