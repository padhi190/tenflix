/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_TMDB_KEY: string
    readonly VITE_ALAN_AI_KEY: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}