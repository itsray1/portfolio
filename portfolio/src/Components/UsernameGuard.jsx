import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NotFound } from "../pages/NotFound";
import { Home } from "../pages/Home";
import StarryBackground from "./StarBackground";

export default function UsernameGuard() {
  const { username } = useParams();
  const [exists, setExists] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/api/profile/${username}/check`)
      .then(async (res) => {
        if (res.status === 404) {
          const data = await res.json();
          setSuggestions(data.available_usernames || []);
          setExists(false);
        } else if (res.ok) {
          setExists(true);
        }
      })
      .catch(() => {
        setExists(false);
      });
  }, [username]);

  if (exists === null) return (
        <div className="relative h-screen flex items-center justify-center bg-background text-foreground">
          <StarryBackground />
          <div className="z-10 text-center">
            <div className="loader mx-auto mb-4" />
            <p>Loading...</p>
          </div>
        </div>
      );
   

  if (!exists) return <NotFound username={username} suggestions={suggestions} />;

  return <Home />;
}
