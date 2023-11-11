import React from "react";
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-nh8pv7fk5qktis8q.us.auth0.com"
    clientId="8qVdIuCkaQeHNFwLsX86wujk1OVIx2dU"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/callback'
    }}
  >
    <App />
  </Auth0Provider>
);
