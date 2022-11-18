import { ClassType, Theme } from "../types/app";

export function setClassList(
  element: HTMLElement,
  type: ClassType,
  value: string
): void {
  if (type === "add") {
    element.classList.add(value);
    return;
  }

  element.classList.remove(value);
}

export function isTheme(theme: Theme): void {
  if (theme === "light") {
    setClassList(document.body, "remove", "dark");
    setClassList(document.body, "add", "light");
    setClassList(document.body, "remove", "bg-darkBlue");
  }

  if (theme === "dark") {
    setClassList(document.body, "remove", "light");
    setClassList(document.body, "add", "dark");
    setClassList(document.body, "add", "bg-darkBlue");
  }

  setClassList(document.body, "add", "duration-500");
}
