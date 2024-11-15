import clsx from "clsx";

export function cn(...classes: (string | undefined | boolean)[]): string {
  return clsx(classes);
}
