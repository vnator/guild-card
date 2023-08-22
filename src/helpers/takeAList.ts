import type { GenericRecord } from "./types";

const filter = (key: string) => key !== 'label' && key !== 'title' && key !== 'level' && key !== 'years'

export const takeKeyList = (record: GenericRecord) => Object.keys(record).filter(filter);
export const takeEntriesList = (record: GenericRecord) => Object.entries(record).filter(([key]) => filter(key));
