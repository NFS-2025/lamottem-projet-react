import  { useEffect, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

interface Card {
  id: string;
  name: string;
  image: string;
  hp?: string;
  types?: string[];
  rarity?: string;
  illustrator?: string;
  set?: {
    name: string;
  };
}


const PokeSwipeLite = () => {
const [cards, setCards] = useState<Card[]>([]);
const [favorites, setFavorites] = useState<Card[]>([]);
const [index, setIndex] = useState<number>(0);
const [direction, setDirection] = useState<"left" | "right" | null>(null);


  useEffect(() => {
const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]") as Card[];
    setFavorites(storedFavorites);
  }, []);


  useEffect(() => {
    axios.get("https://api.tcgdex.net/v2/fr/sets/sv03.5").then((response) => {
   const validCards = response.data.cards.filter(
  (card: Card) => card.image && card.image.startsWith("http")
);

      setCards(validCards);
    });
  }, []);


  const addToFavorites = (card: Card) => {
    const updated = [...favorites, card];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const swipe = (dir: "left" | "right") => {
    setDirection(dir);
    setTimeout(() => {
      if (dir === "right") {
        addToFavorites(cards[index]);
      }
      setIndex((prev) => prev + 1);
      setDirection(null);
    }, 300);
  };

  const currentCard = cards[index];

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl mb-4">Swipe ton Pokémon</h1>

      <div className="w-[300px] h-[450px] relative flex items-center justify-center mb-6">
        <AnimatePresence>
          {currentCard && (
            <motion.div
              key={currentCard.id}
              initial={{ x: 0, opacity: 1 }}
              animate={{
                x: direction === "left" ? -500 : direction === "right" ? 500 : 0,
                opacity: direction ? 0 : 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute bg-white rounded-xl shadow-lg w-full h-full flex flex-col items-center justify-center border border-yellow-400"
            >
              <img
                src={`${currentCard.image}/low.png`}
                alt={currentCard.name}
                className="w-48 mb-4"
              />
              <h2 className="text-xl font-bold text-center px-2">
                {currentCard.name}
              </h2>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex gap-6">
        <button
          onClick={() => swipe("left")}
          className="bg-red-500 hover:bg-red-400 text-white px-4 py-2 rounded shadow"
        >
          ❌ Passer
        </button>
        <button
          onClick={() => swipe("right")}
          className="bg-green-500 hover:bg-green-400 text-white px-4 py-2 rounded shadow"
        >
          ✅ Favori
        </button>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold">Favoris : {favorites.length}</h3>
        <div className="flex flex-wrap justify-center mt-4 gap-2">
          {favorites.map((card) => (
            <img
              key={card.id}
              src={`${card.image}/low.png`}
              alt={card.name}
              className="w-16"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PokeSwipeLite;
