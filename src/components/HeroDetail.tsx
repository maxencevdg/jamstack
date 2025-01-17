interface Hero {
  id: number;
  nom: string;
  description: string;
  force: number;
  agilite: number;
  intelligence: number;
}

interface HeroDetailProps {
  hero: Hero;
}

const HeroDetail: React.FC<HeroDetailProps> = ({ hero }) => {
  return (
    <div>
      <h1>{hero.nom}</h1>
      <p>{hero.description}</p>
      <ul>
        <li>Force: {hero.force}</li>
        <li>Agilité: {hero.agilite}</li>
        <li>Intelligence: {hero.intelligence}</li>
      </ul>
    </div>
  );
};

export default HeroDetail;