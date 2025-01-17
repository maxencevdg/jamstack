import { fetchAPI } from '../../../services/api';
import HeroDetail from '../../../components/HeroDetail';

interface Hero {
  id: number;
  nom: string;
  description: string;
  force: number;
  agilite: number;
  intelligence: number;
}

interface HeroDetailPageProps {
  params: {
    'nom-du-heros': string;
  };
}

async function getHeroData(nom: string): Promise<Hero | null> {
  const response = await fetchAPI('/heroes');
  if (!response) {
    return null;
  }
  const heroes: Hero[] = response.data;
  return heroes.find((h) => h.nom === decodeURIComponent(nom)) || null;
}

const Page = async ({ params }: HeroDetailPageProps) => {
  const hero = await getHeroData(params['nom-du-heros']);
  if (!hero) {
    return <p>Erreur lors de la récupération des données.</p>;
  }
  return <HeroDetail hero={hero} />;
};

export default Page;