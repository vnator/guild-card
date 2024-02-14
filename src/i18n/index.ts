import { coverLetterEn } from "./cover-letter/en";
import { parseMessages } from "../helpers/parseMessage";
import { meEn } from "./me/en";
import { resumeEn } from "./resume/en";
import { resumePt } from "./resume/pt";
import { coverLetterPt } from "./cover-letter/pt";
import { mePt } from "./me/pt";
import { LANG } from "./types";

export const languages = {
  en: 'English',
  ptBR: 'Brazilian Portuguese',
};

export const getLang = (): LANG => LANG.PT;

export const ui = {
  [LANG.EN]: parseMessages({
    resume: resumeEn,
    coverLetter: coverLetterEn,
    me: meEn
  }),
  [LANG.PT]: parseMessages({
    resume: resumePt,
    coverLetter: coverLetterPt,
    me: mePt,
  })
}
