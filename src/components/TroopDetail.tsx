interface Troop {
  id: number;
  nom: string;
  description: string;
  pointsDeVie: number;
  attaque: number;
  defense: number;
}

interface TroopDetailProps {
  troupe: Troop;
}

const TroopDetail: React.FC<TroopDetailProps> = ({ troupe }) => {
  return (
    <div>
      <h1>{troupe.nom}</h1>
      <p>{troupe.description}</p>
      <ul>
        <li>Points de Vie: {troupe.pointsDeVie}</li>
        <li>Attaque: {troupe.attaque}</li>
        <li>Défense: {troupe.defense}</li>
      </ul>
    </div>
  );
};

export default TroopDetail;