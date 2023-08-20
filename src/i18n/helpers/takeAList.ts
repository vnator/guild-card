import type { GenericRecord } from "./types";

export const takeKeyList = (record: GenericRecord) => Object.keys(record).filter(key => (key !== 'label' && key !== 'title'));
export const takeEntriesList = (record: GenericRecord) => Object.entries(record).filter(([key, index]) => (key !== 'label' && key !== 'title'));
