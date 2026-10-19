import Card from "../components/Card.jsx";
import { services } from "../data.js";

export default function Services() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Layanan kami</h1>
      <p className="mt-2 mb-6 text-gray-600">Pilih satu layanan atau gabungkan sesuai kebutuhan.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.id} title={s.title}>
            {s.desc}
          </Card>
        ))}
      </div>
    </div>
  );
}