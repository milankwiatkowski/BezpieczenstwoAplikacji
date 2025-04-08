import Keycloak from 'keycloak-js';
const keycloak = new Keycloak({
    url:"http://localhost:8080",
    realm: "lab5",
    clientId:"mojklient"
})

export default keycloak