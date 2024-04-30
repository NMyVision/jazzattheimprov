/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_GROUP_MEMBERSHIP: string
  readonly VITE_COUPLE_MEMBERSHIP: string
  readonly VITE_INDIVIDUAL_MEMBERSHIP: string
  readonly VITE_CUSTOMER_PORTAL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}