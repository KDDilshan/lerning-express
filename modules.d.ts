declare namespace NodeJS {
  export interface ProcessEnv {
    DATABASE_HOST: string;
    DATABASE_PORT: number;
    DATABASE_USER: string;
    DATABASE_NAME: string;
    DATABASE_PASSWORD: string;
    APP_PORT: number;
  }
}
