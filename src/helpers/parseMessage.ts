import { parse } from '@formatjs/icu-messageformat-parser';
import type { ParseMessage } from '../i18n/types';

export const parseMessages: ParseMessage = (nestedMessages, prefix = '') =>
  nestedMessages instanceof Object
    ? Object.entries(nestedMessages).reduce((prev, cur) => {
        const [key, value] = cur;
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string' || typeof value === 'number') {
          return {
            ...prev,
            [prefixedKey]: value,
          };
        }

        return { ...prev, ...parseMessages(value, prefixedKey) };
      }, {})
    : {};

    