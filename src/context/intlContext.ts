import { createContext } from "react";

export const IntlContext = createContext<Record<string, string> | null>(null)
