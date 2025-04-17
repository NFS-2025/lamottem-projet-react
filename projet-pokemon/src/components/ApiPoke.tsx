import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiPoke = () => {
  const [cards, setCards] = useState([]);
  const [filteredCards, setFilteredCards] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const cardsPerPage = 20;
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);
  const totalPages = Math.ceil(filteredCards.length / cardsPerPage);

  useEffect(() => {
    axios.get("https://api.tcgdex.net/v2/fr/sets/sv03.5")
      .then((response) => {
        const validCards = response.data.cards.filter(
          (card) => card.image && card.image.startsWith("http")
        );
        setCards(validCards);
        setFilteredCards(validCards);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement des cartes :", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = cards.filter((card) =>
      card.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredCards(result);
    setCurrentPage(1);
  }, [search, cards]);

  if (loading) return <p>Chargement...</p>;

  return (
    <div className="p-5">
      <h1 className="text-2xl underline mb-3">Cartes du set : Prismatic Evolutions</h1>

      <div className="mb-5 flex justify-between">
        <input
          type="text"
          placeholder="Rechercher par nom..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded border w-full max-w-md"
        />
            <p className="mb-3">Nombre de cartes : {filteredCards.length}</p>
      </div>

  

      <ul className="flex gap-2 flex-wrap justify-center">
        {currentCards.map((card) => (
          <li
            key={card.id}
            className=" p-4 rounded-lg border-black hover:bg-gray-400 hover:text-black transition w-44 text-center cursor-pointer shadow-2xl"
            onClick={() => window.location.href = `/details/${card.id}`}
          >
            <p>{card.name}</p>
            <img src={`${card.image}/low.png`} alt={card.name} className="w-full mt-2" />
          </li>
        ))}
      </ul>

      {/* Pagination simple */}
      <div className="flex justify-center gap-4 mt-8">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded hover:bg-gray-400 hover:text-black disabled:opacity-30"
        >
          ⬅️ Précédent
        </button>

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded hover:bg-gray-400 hover:text-black disabled:opacity-30"
        >
          Suivant ➡️
        </button>
      </div>

      <p className="text-center mt-4">Page {currentPage} sur {totalPages}</p>
    </div>
  );
};

export default ApiPoke;
