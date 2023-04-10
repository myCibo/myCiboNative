import { useState, useEffect } from 'react';
import Auth0Config from './Auth0Config';
import { makeRedirectUri, useAuthRequest } from 'expo-auth-session';

const useAuth0 = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  // const redirectUri = makeRedirectUri({
  //   native: 'exp://e6-6gz.lbeique.mycibonative.exp.direct:80//auth',
  //   useProxy: true,
  // });

  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: Auth0Config.clientId,
      scopes: ['openid', 'profile', 'email'],
      responseType: 'token id_token',
      redirectUri: makeRedirectUri({ 
        native: 'exp://e6-6gz.lbeique.mycibonative.exp.direct:80/',
        useProxy: true }),
      extraParams: {
        audience: 'https://' + Auth0Config.domain + '/userinfo',
      },
    },
    { authorizationEndpoint: `https://${Auth0Config.domain}/authorize` },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;

      const jwtDecode = require('jwt-decode');
      const decodedToken = jwtDecode(id_token);
      setName(decodedToken.name);
      setEmail(decodedToken.email);
    }
  }, [response]);

  return { name, email, promptAsync };
};

export default useAuth0;
