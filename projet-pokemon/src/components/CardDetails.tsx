import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.tcgdex.net/v2/fr/cards/${id}`)
      .then((response) => {
        setCard(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de chargement des détails :", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!card) return <p>Carte non trouvée</p>;

  return (
    <div className="p-5 flex items-center justify-center flex-col">
      <h1 className="text-3xl mb-4">{card.name}</h1>
      <img src={`${card.image}/low.png`} alt={card.name} className="mb-4 w-60" />
      <p><strong>HP :</strong> {card.hp}</p>
      <p><strong>Type(s) :</strong> {card.types?.join(", ")}</p>
      <p><strong>Rareté :</strong> {card.rarity}</p>
      <p><strong>Illustrateur :</strong> {card.illustrator}</p>
      <p><strong>Set :</strong> {card.set?.name}</p>
    </div>
  );
};

export default CardDetails;
