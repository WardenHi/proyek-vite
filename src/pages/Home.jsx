import { Link } from "react-router-dom";
import Card from "../components/Card.jsx";
import { services } from "../data.js";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-5xl">All in untuk publishing karya Anda</h1>
        <p className="mx-auto mt-4 max-w-xl text-gray-600">
          Fih & Co., membantu teman-teman indie, memberikan jalan kepada karya yang tidak dan belum terkenal.
        </p>
        <Link to="/kontak" className="mt-6 inline-block rounded bg-brand-600 px-5 py-2 font-semibold text-white hover:bg-brand-700">
          Hubungi kami
        </Link>
      </section>

      <section>
        <h2 className="mb-2 text-2xl font-bold">Tentang singkat</h2>
        <p className="text-gray-600">
          Kami perusahaan penerbit dengan fokus untuk memberikan kesempatan pada segala jenis penulis untuk menerbitkan karyanya.
        </p>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold">Layanan unggulan</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <Card key={s.id} title={s.title}>
              {s.desc}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}