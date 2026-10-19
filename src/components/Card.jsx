export default function Card({ title, children }) {
  return (
    <div className="rounded-lg border bg-white p-5 shadow-sm">
      {title && <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>}
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  );
}