export function SectionLabel({
  index,
  label,
  light,
}: {
  index: string;
  label: string;
  light?: boolean;
}) {
  return (
    <div className="mb-6 flex items-center gap-4">
      <span className="font-serif text-sm text-[var(--iaa-turquoise)]">{index}</span>
      <span className={`micro ${light ? "text-[color-mix(in_oklch,var(--iaa-ivory)_55%,transparent)]" : ""}`}>
        {label}
      </span>
    </div>
  );
}
