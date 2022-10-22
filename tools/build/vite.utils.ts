import path from 'path';
import { Alias } from 'vite';

import tsconfig from '../../tsconfig.json';

export const workspaceRoot = path.resolve(__dirname, '../..');

const pathEntries = Object.entries(tsconfig.compilerOptions.paths);

// assumes 1-1 relationship with paths in tsconfig
export const getAliasEntries = (): Alias[] =>
  pathEntries
    // only include aliases that aren't wildcards
    // tsconfig is in glob, but vitest uses regex
    .filter(([alias]) => !alias.includes('*'))
    .map(([alias, [currentPath]]) => ({
      find: alias,
      replacement: path.resolve(workspaceRoot, currentPath),
    }));
