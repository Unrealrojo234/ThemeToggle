import { useEffect, useState } from "react";
import { useRef } from "react";

const Characters = () => {
  const api = import.meta.env.VITE_REACT_API_RICK_AND_MORTY;
  const [characters, setCharacters] = useState([]);
  const loading = useRef(true);

  useEffect(() => {
    fetch(`${api}/character`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters((characters) => data.results);
        console.log(characters);
        loading.current = false;
      })
      .catch((error) => {
        console.log("Error ", error);
      });
  }, []);

  return (
    <div>
      <h1
        className="text-center"
        style={{
          fontWeight: "800",
          color: "lightgreen",
        }}
      >
        Rick And Morty Characters
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
        className="text-center"
      >
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              maxWidth: "28rem",
              padding: "8px",
              display: "inline-block",
            }}
          >
            <img
              src={character.image}
              className="img-fluid"
              loading="lazy"
              style={{ width: "100%", height: "auto" }}
              alt={character.name}
            />
            <p style={{ fontFamily: "cursive" }}>{character.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
