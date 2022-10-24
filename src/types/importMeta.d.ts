interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  [key: string]: any;
  TMDB_API_KEY_V3: string;
}
