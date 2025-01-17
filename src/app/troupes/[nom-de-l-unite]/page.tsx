import { fetchAPI } from '../../../services/api';
import TroopDetail from '../../../components/TroopDetail';

interface Troop {
  id: number;
  nom: string;
  description: string;
  pointsDeVie: number;
  attaque: number;
  defense: number;
}

interface TroopDetailPageProps {
  params: {
    'nom-de-l-unite': string;
  };
}

async function getTroopData(nom: string): Promise<Troop | null> {
  const response = await fetchAPI('/troops');
  const troupes: Troop[] = response.data;
  return troupes.find((t) => t.nom === nom) || null;
}

const TroopDetailPage = async ({ params }: TroopDetailPageProps) => {
  const troupe = await getTroopData(params['nom-de-l-unite']);
  if (!troupe) {
    return <p>Erreur lors de la récupération des données.</p>;
  }
  return <TroopDetail troupe={troupe} />;
};

export default TroopDetailPage;