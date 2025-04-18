import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Card } from "../types/Card"; // ou déclare l'interface ici si besoin

const CardDetails = () => {
  const { id } = useParams();
  const [card, setCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get<Card>(`https://api.tcgdex.net/v2/fr/cards/${id}`)
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

        <div className='flex justify-center w-full'>
        <Link to="/list-card" className='flex justify-center p-10 max-w-[500px]'>
          <button className='btn btn-primary p-5 w-full'>Retour</button>
        </Link>
        </div>
    </div>
  );
};

export default CardDetails;
