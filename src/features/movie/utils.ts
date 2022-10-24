import camelCase from 'lodash.camelcase';
import { CamelCasedProperties } from 'type-fest';

export const createShallowHumps = <V>(obj: V) => {
  return Object.entries(obj as Record<string, unknown>).reduce<
    Record<string, unknown>
  >((prev, [key, val]) => {
    prev[camelCase(key)] = val;
    return prev;
  }, {}) as CamelCasedProperties<V>;
};
