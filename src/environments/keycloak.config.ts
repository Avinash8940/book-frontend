import { KeycloakConfig } from 'keycloak-js';

const keycloakConfig: KeycloakConfig = {
    url: 'http://localhost:8080',
    realm: 'Rineesh',
    clientId: 'angular-client',
};

export default keycloakConfig;