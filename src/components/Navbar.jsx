import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "Beranda" },
  { to: "/tentang", label: "Tentang" },
  { to: "/layanan", label: "Layanan" },
  { to: "/portofolio", label: "Portofolio" },
  { to: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  return (
    <header className="border-b bg-black">
      <nav className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <span className="text-lg font-bold text-brand-700">Fih & Co. Publishing</span>
        <ul className="flex flex-wrap gap-4 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end
                className={({ isActive }) => (isActive ? "font-semibold text-brand-700" : "text-gray-600 hover:text-brand-700")}
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}