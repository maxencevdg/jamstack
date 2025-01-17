import Link from 'next/link';

interface Troop {
  id: number;
  nom: string;
  description: string;
  pointsDeVie: number;
  attaque: number;
  defense: number;
}

interface TroopListProps {
  troupes: Troop[];
}

const TroopList: React.FC<TroopListProps> = ({ troupes }) => {
  return (
    <ul>
      {troupes.map((troupe) => (
        <li key={troupe.id}>
          <Link href={`/troupes/${troupe.nom}`}>
            {troupe.nom}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TroopList;