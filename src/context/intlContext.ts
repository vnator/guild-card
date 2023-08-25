import { createContext } from "react";
import { getLang, ui } from "../i18n";

export const IntlContext = createContext<Record<string, string>>(ui[getLang()])
