import { ui, defaultLang, type Lang } from "./ui";

export function getLang(url: URL): Lang {
  const [, firstSegment] = url.pathname.split("/");
  if (firstSegment === "sr") return "sr";
  return defaultLang;
}

export function getTranslations(lang: Lang) {
  return ui[lang];
}
