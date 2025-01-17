import Image from "next/image";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <main style={{ textAlign: "center" }}>
        <h1>Bienvenue sur le site des Orks de Warhammer</h1>
        <p>Découvrez les héros et les troupes chez les Orks.</p>
        <Image
          src="/images/orks-logo.png"
          alt="Orks logo"
          width={180}
          height={180}
        />
        <div style={{ marginTop: "20px" }}>
          <a
            href="/heros"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Voir les Héros
          </a>
          <a
            href="/troupes"
            style={{
              display: "inline-block",
              margin: "10px",
              padding: "10px 20px",
              backgroundColor: "#0070f3",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
            }}
          >
            Voir les Troupes
          </a>
        </div>
      </main>
    </div>
  );
}