export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export const ease = [0.16, 1, 0.3, 1] as const;
