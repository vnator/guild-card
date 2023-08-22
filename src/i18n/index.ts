import { coverLetterEn } from "./cover-letter/en";
import { parseMessages } from "../helpers/parseMessage";
import { meEn } from "./me/en";
import { resumeEn } from "./resume/en";

export const languages = {
  en: 'English',
  ptBR: 'Brazilian Portuguese',
};

export const defaultLang = 'en-US';

export const ui = {
  'en-US': parseMessages({
    resume: resumeEn,
    coverLetter: coverLetterEn,
    me: meEn
  }),
}
