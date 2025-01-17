import { fetchAPI } from "../../services/api";
import TroopList from "../../components/TroopList";

interface Troop {
  id: number;
  nom: string;
  description: string;
  pointsDeVie: number;
  attaque: number;
  defense: number;
}

interface ApiResponse {
  data: Troop[];
}

export default async function Troupes() {
  const response: ApiResponse = await fetchAPI("/troops");
  if (!response) {
    return <p>Erreur lors de la récupération des données.</p>;
  }
  const troops: Troop[] = response.data;

  return (
    <div>
      <h1>Présentation des Troupes</h1>
      <TroopList troupes={troops} />
    </div>
  );
}