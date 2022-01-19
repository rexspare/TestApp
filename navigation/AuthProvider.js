import React, { createContext, useState } from 'react'
import auth from '@react-native-firebase/auth'

export const AuthContext = new createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                login: async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error)
                    }
                },
                register: async (email, password) => {
                    try {
                        await auth().createUserWithEmailAndPassword(email, password)
                    } catch (error) {
                        console.log(error)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch (error) {
                        console.log(error)
                    }
                },

                reset: async (email) => {
                    try {
                        await auth().sendPasswordResetEmail(email)
                    } catch (error) {
                        console.log(error);
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

// import React, { Component, createContext } from 'react'
// import auth from '@react-native-firebase/auth'
// export const AuthContext = new createContext();
// export class AuthProvider {
//     state = {
//         user: null
//     }



//     render() {
//         const { user } = this.state

//         return (
//             <AuthContext.Provider
//                 value={{
//                     user,
//                     setUser: (user) => this.setState({ user: user }),
//                     login: async (email, password) => {
//                         try {
//                             await auth().signInWithEmailAndPassword(email, password)
//                         } catch (error) {
//                             console.log(error)
//                         }
//                     },
//                     register: async (email, password) => {
//                         try {
//                             await auth().createUserWithEmailAndPassword(email, password)
//                         } catch (error) {
//                             console.log(error)
//                         }
//                     },
//                     logout: async () => {
//                         try {
//                             await auth().signOut()
//                         } catch (error) {
//                             console.log(error)
//                         }
//                     }
//                 }}
//             >

//             </AuthContext.Provider>
//         )
//     }
// }
