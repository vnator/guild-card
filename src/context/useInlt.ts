import { useContext } from "react"
import { IntlContext } from "./intlContext"

export const useIntl = () => {
  const intl = useContext(IntlContext);

  return (key: string) => intl ? intl[key] : key;
}
