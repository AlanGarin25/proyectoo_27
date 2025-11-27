import React from "react";
import { Eye, FileText } from "lucide-react";

/** 🎨 Estilos por estado del documento */
const statusStyles = {
  "Aprobado": "bg-[#7CC17E] text-[#173E22]",            // verde
  "En Revisión": "bg-[#F4C76C] text-[#6A4A00]",         // amarillo
  "En Progreso": "bg-[#93B4E6] text-[#15345C]",         // azul
  "Requiere Cambios": "bg-[#F07C84] text-[#6B0E19]",    // rojo
};

/** 🗂️ Devuelve la etiqueta del archivo según su extensión */
function fileBadge(ext = "") {
  const e = ext.toLowerCase();
  if (e === "pdf") return { label: "PDF", bg: "bg-[#E64A3B]" };
  if (e === "doc" || e === "docx") return { label: "DOC", bg: "bg-[#2B6CB0]" };
  if (e === "xlsx") return { label: "XLSX", bg: "bg-[#2F855A]" };
  return { label: e?.toUpperCase() || "FILE", bg: "bg-gray-500" };
}

/** ✅ Chip de estado */
const StatusPill = ({ value }) => {
  const base = "px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center";
  const color = statusStyles[value] || "bg-gray-300 text-gray-800";
  return <span className={`${base} ${color}`}>{value}</span>;
};

/** 📄 Celda con ícono y badge del tipo de archivo */
const FileCell = ({ name }) => {
  const parts = name.split(".");
  const ext = parts.length > 1 ? parts.pop() : "";
  const { label, bg } = fileBadge(ext);

  return (
    <div className="flex items-center gap-3">
      <div className="relative">
        <FileText className="w-6 h-6 text-white/90" />
        <span
          className={`absolute -bottom-2 left-1/2 -translate-x-1/2 ${bg} text-white text-[10px] font-bold px-1.5 py-[1px] rounded`}
        >
          {label}
        </span>
      </div>
      <span className="text-white/95 font-medium">{name}</span>
    </div>
  );
};

/** 👁️ Botón de acción (ver documento) */
const ViewButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="inline-flex items-center justify-center w-9 h-9 rounded-md bg-[#0FA3A6] hover:opacity-90 transition"
    title="Ver"
    type="button"
  >
    <Eye className="w-5 h-5 text-white" />
  </button>
);

/** 🧾 Tabla principal */
const RecentDocsTable = () => {
  const title = "Documentos Recientes";
  const showIndex = true;

  const data = [
    {
      id: 1,
      name: "Informe_Proyecto.pdf",
      project: "Proyecto Alfa",
      lastModified: "03/11/2025",
      status: "Aprobado",
    },
    {
      id: 2,
      name: "Diseño_UI.docx",
      project: "Proyecto Beta",
      lastModified: "02/11/2025",
      status: "En Revisión",
    },
    {
      id: 3,
      name: "Presupuesto.xlsx",
      project: "Proyecto Gamma",
      lastModified: "01/11/2025",
      status: "En Progreso",
    },
  ];

  const onView = (row) => {
    alert(`Ver documento: ${row.name}`);
  };

  return (
    <div
      className="w-full overflow-hidden rounded-xl shadow-xl border border-white/10"
      style={{ backgroundColor: "#0F2744" }}
    >
      {/* Header */}
      <div className="px-6 pt-6">
        <h2 className="text-white font-bold text-2xl">{title}</h2>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full">
          <thead>
            <tr className="text-left text-white/90 border-y border-white/10">
              {showIndex && (
                <th className="py-4 px-6 font-semibold">#</th>
              )}
              <th className="py-4 px-6 font-semibold">Nombre del Documento</th>
              <th className="py-4 px-6 font-semibold">Proyecto</th>
              <th className="py-4 px-6 font-semibold">Última Modificación</th>
              <th className="py-4 px-6 font-semibold">Estado</th>
              <th className="py-4 px-6 font-semibold">Acción</th>
            </tr>
          </thead>

          <tbody>
            {data.map((row, idx) => (
              <tr
                key={row.id ?? idx}
                className="border-b border-white/10 hover:bg-white/5 transition"
              >
                {showIndex && (
                  <td className="py-4 px-6 text-white/80">{idx + 1}</td>
                )}

                <td className="py-4 px-6">
                  <FileCell name={row.name} />
                </td>

                <td className="py-4 px-6 text-white/90">{row.project}</td>

                <td className="py-4 px-6 text-white/80">{row.lastModified}</td>

                <td className="py-4 px-6">
                  <StatusPill value={row.status} />
                </td>

                <td className="py-4 px-6">
                  <ViewButton onClick={() => onView(row)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDocsTable;
