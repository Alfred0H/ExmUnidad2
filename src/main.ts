import 'dotenv/config';
import App from './app'

//INICIAR LA APLICACION
App.listen(process.env.APP_PORT as unknown as number | 3001); //Variable que utilizará express para puerto