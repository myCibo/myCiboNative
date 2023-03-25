import React, { createContext, useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth0 from './Auth0Config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authRequest = {
        clientId: auth0.clientId,
        responseType: 'token id_token',
        scopes: ['openid', 'profile', 'email'],
        redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
        extraParams: {
            audience: 'https://' + auth0.domain + '/userinfo',
        },
        authUrl: `https://${auth0.domain}/authorize`,  
    };

    const authUrl =
        `https://${auth0.domain}/authorize?` +
        `response_type=${encodeURIComponent(authRequest.responseType)}` +
        `&client_id=${encodeURIComponent(authRequest.clientId)}` +
        `&redirect_uri=${encodeURIComponent(authRequest.redirectUri)}` +
        `&scope=${encodeURIComponent(authRequest.scopes.join(' '))}` +
        `&audience=${encodeURIComponent(authRequest.extraParams.audience)}`;


    useEffect(() => {
        (async () => {
            try {
                const accessToken = await AsyncStorage.getItem('accessToken');
                if (accessToken) {
                    const userInfo = await auth0.auth.userInfo({ token: accessToken });
                    setUser(userInfo);
                }
            } catch (error) {
                console.error('Error fetching credentials:', error);
            }
            setLoading(false);
        })();
    }, []);

    const login = async () => {
        try {
            const result = await AuthSession.startAsync({ authUrl });

            if (result.type === 'success' && result.params.access_token) {
                await AsyncStorage.setItem('accessToken', result.params.access_token);
                const userInfo = await auth0.auth.userInfo({ token: result.params.access_token });
                setUser(userInfo);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    const logout = async () => {
        await AsyncStorage.removeItem('accessToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
