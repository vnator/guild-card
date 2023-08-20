import { createContext } from "react";
import { defaultLang, ui } from "../i18n";

export const IntlContext = createContext<Record<string, string>>(ui[defaultLang])
