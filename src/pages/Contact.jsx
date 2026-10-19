import { useState } from "react";

const empty = { name: "", email: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Nama wajib diisi.";
  if (!v.email.trim()) e.email = "Email wajib diisi.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Format email tidak valid.";
  if (v.message.trim().length < 10) e.message = "Pesan minimal 10 karakter.";
  return e;
}

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSent(true);
      setValues(empty);
    }
  };

  const input = "w-full rounded border px-3 py-2";

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div>
        <h1 className="mb-4 text-3xl font-bold">Kontak</h1>
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {sent && <p className="rounded bg-green-100 px-3 py-2 text-green-800">Pesan terkirim, terima kasih!</p>}

          <div>
            <label htmlFor="name" className="mb-1 block text-sm font-medium">Nama</label>
            <input id="name" name="name" value={values.name} onChange={handleChange} className={input} />
            {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="email" className="mb-1 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" value={values.email} onChange={handleChange} className={input} />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="message" className="mb-1 block text-sm font-medium">Pesan</label>
            <textarea id="message" name="message" rows="5" value={values.message} onChange={handleChange} className={input} />
            {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
          </div>

          <button type="submit" className="rounded bg-brand-600 px-5 py-2 font-semibold text-white hover:bg-brand-700">
            Kirim
          </button>
        </form>
      </div>

      <div className="space-y-2 text-gray-600">
        <h2 className="text-xl font-semibold text-gray-900">Alamat</h2>
        <p>Blok Setantuang No. 13, Bandung.</p>
        <p>ask@fihpublish.rus</p>
        <h2 className="pt-4 text-xl font-semibold text-gray-900">Media sosial</h2>
        <p>Instagram: @fihpub</p>
        <p>LinkedIn: Fih & Co. Publishing</p>
      </div>
    </div>
  );
}