export interface GenericRecord extends Record<string, string | GenericRecord> {}
export type ExcludeItl<T extends Object> = Exclude<T, 'label' | 'title'>
