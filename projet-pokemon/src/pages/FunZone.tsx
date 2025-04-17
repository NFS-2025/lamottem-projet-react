import React, { useEffect, useState } from 'react';

const pokemons = [
  { name: 'Pikachu', message: "Électrique et imprévisible ⚡" },
  { name: 'Salamèche', message: "Toujours chaud, jamais down 🔥" },
  { name: 'Rondoudou', message: "Dort partout, chante faux 😴" },
  { name: 'Evoli', message: "Flexible comme ton emploi du temps 🌀" },
  { name: 'Magicarpe', message: "Inutile... mais attend de voir la suite 😏" },
  { name: 'Ronflex', message: "Mange, dors, répète 🛌" },
];

const meteos = [
  "Aujourd’hui, il pleut des Magicarpe 🐟",
];

const FunZone = () => {
  const [chosenPokemon, setChosenPokemon] = useState<null | { name: string; message: string }>(null);
  const [weather, setWeather] = useState('');
  const [message, setMessage] = useState('');
  const [gifVisible, setGifVisible] = useState(false);
  const [bilelData, setBilelData] = useState<null | string>(null);
  const audio = new Audio('/audio/prof-chen.mp3');
  const bilel = new Audio('/audio/bilel.mp3');


  // Météo
  useEffect(() => {
    const randomWeather = meteos[Math.floor(Math.random() * meteos.length)];
    setWeather(randomWeather);
  }, []);

  // Mini-jeu
  const handleWhichPokemon = () => {
    const random = pokemons[Math.floor(Math.random() * pokemons.length)];
    setChosenPokemon(random);
  };

  // Appel Prof Chen
const callChen = () => {
  setMessage("📞 Appel en cours...");
  audio.play();

  // Quand le premier audio se termine, on joue le deuxième
  audio.onended = () => {
    bilel.play();
    setMessage("💬 Wallah j'suis occupé frère, rappelle plus tard.");
  };
};


  // Faux Pokédex Bilel
  const handlePokedex = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.bilel.value.toLowerCase();
    if (input === 'bilel') {
      setBilelData(`
📛 Nom : Bilel
⚡ Type : Rebeu glitché
🛠️ Attaque spéciale : WiFi volé
🌮 Compétence : Griller tacos en 3s
      `);
    } else {
      setBilelData("❌ Ce dresseur n'existe pas dans le Pokédex.");
    }
  };

  // Surprise Miaouss
  const showSurprise = () => {
    setGifVisible(true);
  };

  return (
    <div className="relative overflow-hidden min-h-screen bg-blue-50 flex flex-col items-center justify-center gap-10 py-10 px-4">
      <h1 className="text-3xl font-bold text-center">🔥 Zone de Fun Inutile</h1>

      {/* Météo Pokémon */}
      <div className="bg-white shadow-md rounded px-6 py-4">
        <p className="text-lg font-semibold text-center">{weather}</p>
      </div>

      {/* Magicarpe pluie */}
      {weather.includes('Magicarpe') && (
        <div className="absolute inset-0 pointer-events-none z-10">
          {[...Array(15)].map((_, i) => (
            <img
              key={i}
              src="https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/129.png"
              alt="Magicarpe"
              className="w-50 absolute animate-[fall_5s_linear_infinite]"
              style={{
                top: `${-200}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Mini-jeu Pokémon */}
      <div className="text-center">
        <button
          onClick={handleWhichPokemon}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-300 rounded-full shadow-md text-black font-semibold"
        >
          Quel Pokémon es-tu ?
        </button>

        {chosenPokemon && (
          <div className="mt-6 bg-white rounded-lg p-4 shadow">
            <h2 className="text-2xl font-bold mb-2">{chosenPokemon.name}</h2>
            <p>{chosenPokemon.message}</p>
          </div>
        )}
      </div>

      {/* Appeler Professeur Chen */}
      <div className="bg-white p-4 rounded shadow text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">📞 Appeler Professeur Chen</h2>
        <button
          onClick={callChen}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded"
        >
          Appeler maintenant
        </button>
        {message && <p className="mt-4">{message}</p>}
      </div>

      {/* Pokédex Bilel */}
      <div className="bg-white p-4 rounded shadow text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">🧠 Faux Pokédex</h2>
        <form onSubmit={handlePokedex}>
          <input
            type="text"
            name="bilel"
            placeholder="Entre ton blaze"
            className="border px-2 py-1 rounded w-full"
          />
          <button
            type="submit"
            className="mt-2 bg-yellow-400 hover:bg-yellow-300 px-4 py-1 rounded"
          >
            Scanner
          </button>
        </form>
        {bilelData && (
          <pre className="mt-4 bg-gray-100 p-2 rounded text-left text-sm whitespace-pre-wrap">
            {bilelData}
          </pre>
        )}
      </div>

      {/* Surprise Miaouss */}
      <div className="bg-white p-4 rounded shadow text-center w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">👁️ Le Bouton Surprise</h2>
        <button
          onClick={showSurprise}
          className="bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 rounded"
        >
          Clique si t’oses
        </button>
        {gifVisible && (
          <div className="my-4 flex justify-center items-center">
            <img
              src="https://www.media.pokekalos.fr/img/pokemon/home/miaouss.png"
              alt="Miaouss gif"
              className="w-60 animate-spin-slow"
            />
            <audio autoPlay loop>
              <source src="/audio/team-rocket.mp3" type="audio/mpeg" />
            </audio>
          </div>
        )}
      </div>

      {/* Animations custom */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-100px);
              opacity: 0.8;
            }
            100% {
              transform: translateY(110vh);
              opacity: 0;
            }
          }

          .animate-spin-slow {
            animation: spin 6s linear infinite;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default FunZone;
