import React from "react";

interface TableColumn {
  header: string;
  key: string;
}

interface SpecTableProps {
  columns: TableColumn[];
  data: Record<string, string | number>[];
  title?: string;
}

export default function SpecTable({ columns, data, title }: SpecTableProps) {
  return (
    <div className="w-full">
      {title && <h4 className="text-xl font-bold text-slate-900 mb-4">{title}</h4>}
      <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-800 font-semibold uppercase tracking-wider text-xs">
            <tr>
              {columns.map((col, idx) => (
                <th key={col.key} className={`px-6 py-4 border-b border-gray-200 ${idx === 0 ? "pl-6" : ""}`}>
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="hover:bg-blue-50/50 transition-colors">
                {columns.map((col, colIdx) => (
                  <td key={colIdx} className={`px-6 py-4 whitespace-nowrap ${colIdx === 0 ? "text-slate-900 font-semibold pl-6" : ""}`}>
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
