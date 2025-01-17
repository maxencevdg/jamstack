import { fetchAPI } from "../../services/api";
import HeroList from "../../components/HeroList";

interface Hero {
  id: number;
  nom: string;
  description: string;
  force: number;
  agilite: number;
  intelligence: number;
}

interface ApiResponse {
  data: Hero[];
}

export default async function Heros() {
  const response: ApiResponse = await fetchAPI("/heroes");
  if (!response) {
    return <p>Erreur lors de la récupération des données.</p>;
  }
  const heroes: Hero[] = response.data;

  return (
    <div>
      <h1>Liste des Héros</h1>
      <HeroList heros={heroes} />
    </div>
  );
}