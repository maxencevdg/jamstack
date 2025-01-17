import Link from 'next/link';

interface Hero {
  id: number;
  nom: string;
  description: string;
  force: number;
  agilite: number;
  intelligence: number;
}

interface HeroListProps {
  heros: Hero[];
}

const HeroList: React.FC<HeroListProps> = ({ heros }) => {
  return (
    <ul>
      {heros.map((hero) => (
        <li key={hero.id}>
          <Link href={`/heros/${encodeURIComponent(hero.nom)}`}>
            {hero.nom}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default HeroList;