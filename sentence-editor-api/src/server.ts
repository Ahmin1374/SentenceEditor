// import {app} from "./mwsplus-api";
import { Server } from 'http';
import { app } from './sentence-editor-api';

export const startServer = (): Server => {
    console.log("start listening")
    return app.listen(3000, '0.0.0.0');
};

startServer();
