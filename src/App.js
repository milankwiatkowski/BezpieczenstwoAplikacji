'use client'
import { useKeycloak } from "@react-keycloak/web";
import { useNavigate, Routes, Route } from "react-router-dom";
import Tajne from "./Tajne"; // <- zakładam, że masz taki komponent
import "./App.css";

function App() {
  const navigate = useNavigate();
  const { keycloak, initialized } = useKeycloak();

  if (!initialized) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            path="/"
            element={
              keycloak.authenticated ? (
                <>
                  <p>Welcome, {keycloak.tokenParsed?.preferred_username}!</p>
                  <button onClick={() => navigate("/tajne")}>Leć dalej</button>
                </>
              ) : (
                <>
                  <p>You are not logged in!</p>
                  <button onClick={() => keycloak.login()}>Login</button>
                </>
              )
            }
          />
          <Route
            path="/tajne"
            element={
              keycloak.authenticated ? (
                <Tajne />
              ) : (
                <p>Brak dostępu — zaloguj się!</p>
              )
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
