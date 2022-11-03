import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";

export default function Guides() {
  const { user, authReady } = useContext(AuthContext);
  const [guides, setGuides] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        "/.netlify/functions/guide",
        user && {
          headers: {
            Authorization: "Bearer " + user.token.access_token,
          },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("Debes de iniciar sesion");
          }
          return res.json();
        })
        .then((data) => {
          setGuides(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGuides(null);
        });
    }
  }, [user, authReady]);

  return (
    <div className="">
      {!authReady && <div>Loading...</div>}
      {error && (
        <div>
          <p>{error}</p>
        </div>
      )}
      {guides &&
        guides.map((guide) => (
          <div key={guide.title}>
            <h3>{guide.title}</h3>
            <h4>Escrito por aeamano</h4>
          </div>
        ))}
    </div>
  );
}
