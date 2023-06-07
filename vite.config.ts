
import { CommonServerOptions, ConfigEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })

export default defineConfig((config: ConfigEnv) => {
  const envFilename = '.env';
  const curEnvFilename = `${envFilename}.${config.mode}`;
  console.log('curEnvFilename: ', curEnvFilename);
  let server: CommonServerOptions = {}; 

  if (config.mode === 'development') {
   
    server = {
      port: 5005,
      host: '10.8.5.211',
      proxy: {
        '/dang': {
          target: 'http://10.8.5.211:5003/'
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
