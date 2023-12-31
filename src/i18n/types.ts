
export enum LANG {
  PT = 'pt-BR',
  EN = 'en-US',
}

export interface PolifillStruct {
  hasPolifill: boolean;
  paths: string[];
}

export type IntlMessage = { [key: string]: string | IntlMessage } | unknown;

export interface LocaleSelected {
  lang: LANG;
}

export interface IntlParsedMessage {
  [key: string]: string;
}

export interface ParseMessage {
  (nestedMessages: IntlMessage, prefix?: string): IntlParsedMessage;
}

export interface ApplicationMessages {
  [LANG.EN]: IntlParsedMessage;
  [LANG.PT]: IntlParsedMessage;
}
