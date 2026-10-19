import Card from "../components/Card.jsx";
import { team } from "../data.js";

const misi = [
  "Menyediakan layanan penyuntingan terbaik.",
  "Memastikan batasan topik yang minimal.",
  "Menangani konsekuensi hukum apapun yang klien perlukan.",
  "Meminimalisasi sensor pada karya klien.",
];

export default function About() {
  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-bold">Tentang kami</h1>

      <section>
        <h2 className="mb-2 text-xl font-semibold">Sejarah singkat</h2>
        <p className="text-gray-600">
          Fih & Co. diciptakan oleh tangan John "Fih" Artmadea beserta rekan-rekannya, yang dulunya merupakan bagian dari kelompok yang dikenal luas sebagai Fih Cult di Tennessee dan Kentucky.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <Card title="Visi">Menyoroti gagasan-gagasan terburuk umat manusia, dengan kualitas-kualitas terbaik.</Card>
        <Card title="Misi">
          <ul className="list-inside list-disc space-y-1">
            {misi.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 text-xl font-semibold">Tim kami</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((p) => (
            <Card key={p.id} title={p.name}>
              {p.role}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}