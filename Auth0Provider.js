// import React, { createContext, useState, useEffect } from 'react';
// import { useAuth0, Auth0Provider as Auth0ProviderOriginal } from 'react-native-auth0';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const AuthContext = createContext();

// export const Auth0Provider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const { auth0, authorize } = useAuth0();

//   useEffect(() => {
//     (async () => {
//       try {
//         const accessToken = await AsyncStorage.getItem('accessToken');
//         if (accessToken) {
//           const userInfo = await auth0.auth.userInfo({ token: accessToken });
//           setUser(userInfo);
//         }
//       } catch (error) {
//         console.error('Error fetching credentials:', error);
//       }
//       setLoading(false);
//     })();
//   }, []);

//   const login = async () => {
//     try {
//       const result = await authorize();
//       if (result.accessToken) {
//         await AsyncStorage.setItem('accessToken', result.accessToken);
//         const userInfo = await auth0.auth.userInfo({ token: result.accessToken });
//         setUser(userInfo);
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//     }
//   };

//   const logout = async () => {
//     await AsyncStorage.removeItem('accessToken');
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout, loading }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = React.useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error('useAuth must be used within an Auth0Provider');
//   }
//   return context;
// };
