
import { CommonServerOptions, ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';
import dotenv from 'dotenv';
import type { EnvConfig } from './src/declare/myenv';


export default defineConfig((config: ConfigEnv) => {
  const envFilename = '.env';
  const curEnvFilename = `${envFilename}.${config.mode}`;
  let server: CommonServerOptions = {}; 
  const envData = fs.readFileSync(curEnvFilename);
  const envConfig = dotenv.parse<EnvConfig>(envData);

  if (config.mode === 'development') {
    
    server = {
      port: Number(envConfig.VITE_PORT),
      host: envConfig.VITE_HOST,
      proxy: {
        [envConfig.VITE_BASE_URL]: {
          target: envConfig.VITE_PROXY_DOMAIN
        }
      }
    }

    console.log('development env', server);
  } else if (config.mode === 'production') {
    console.log('production env');
  }

  return {
    server,
    plugins: [vue()],
  }
})
