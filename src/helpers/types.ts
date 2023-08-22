export interface GenericRecord extends Record<string, string | number | GenericRecord> {}
export type ExcludeItl<T extends Object> = Exclude<T, 'label' | 'title'>
