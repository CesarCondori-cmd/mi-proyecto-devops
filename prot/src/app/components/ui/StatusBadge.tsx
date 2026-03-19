import type { CaseStatus, DerivacionStatus } from '../../types';

const caseStatusConfig: Record<CaseStatus, { label: string; classes: string }> = {
  nuevo: { label: 'Nuevo', classes: 'bg-blue-100 text-blue-800 border-blue-200' },
  en_proceso: { label: 'En Proceso', classes: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  derivado: { label: 'Derivado', classes: 'bg-purple-100 text-purple-800 border-purple-200' },
  judicializado: { label: 'Judicializado', classes: 'bg-orange-100 text-orange-800 border-orange-200' },
  cerrado: { label: 'Cerrado', classes: 'bg-gray-100 text-gray-600 border-gray-200' },
};

const derivacionStatusConfig: Record<DerivacionStatus, { label: string; classes: string }> = {
  enviado: { label: 'Enviado', classes: 'bg-sky-100 text-sky-800 border-sky-200' },
  recibido: { label: 'Recibido', classes: 'bg-teal-100 text-teal-800 border-teal-200' },
  en_proceso: { label: 'En Proceso', classes: 'bg-indigo-100 text-indigo-800 border-indigo-200' },
  resuelto: { label: 'Resuelto', classes: 'bg-green-100 text-green-800 border-green-200' },
};

export function CaseStatusBadge({ status }: { status: CaseStatus }) {
  const cfg = caseStatusConfig[status];
  return (
    <span className={`inline-flex items-center rounded-full border text-xs px-2.5 py-0.5 font-medium ${cfg.classes}`}>
      {cfg.label}
    </span>
  );
}

export function DerivacionStatusBadge({ status }: { status: DerivacionStatus }) {
  const cfg = derivacionStatusConfig[status];
  return (
    <span className={`inline-flex items-center rounded-full border text-xs px-2.5 py-0.5 font-medium ${cfg.classes}`}>
      {cfg.label}
    </span>
  );
}
