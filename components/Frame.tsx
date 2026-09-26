export function Frame({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "footer" | "header";
}) {
  return <Tag className={`frame ${className}`.trim()}>{children}</Tag>;
}
