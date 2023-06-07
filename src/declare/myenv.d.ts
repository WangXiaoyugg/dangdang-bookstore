import { DotenvParseOutput } from "dotenv";

export interface EnvConfig extends DotenvParseOutput {
    VITE_BASE_URL: string;
    VITE_HOST: string;
    VITE_PORT: string;
    VITE_PROXY_DOMAIN: string;
} 