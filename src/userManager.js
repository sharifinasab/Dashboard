import { createUserManager } from 'redux-oidc';

const userManagerConfig = {
  client_id: 'dashboard',
  redirect_uri: 'http://localhost:3000/#/callback',
  response_type: 'token id_token',
  scope:"openid profile api1",
  authority: 'http://localhost:5000',
  silent_redirect_uri: 'http://localhost:3000/silentRenew.html',
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: false,
  monitorSession: true
};

const userManager = createUserManager(userManagerConfig);

export default userManager;