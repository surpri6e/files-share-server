import dotenv from 'dotenv';
import { IConfig } from './types/IConfig';
dotenv.config();

export const firebaseConfig: IConfig = {
   apiKey: process.env.apiKey,
   appId: process.env.appId,
   authDomain: process.env.authDomain,
   messagingSenderId: process.env.messagingSenderId,
   projectId: process.env.projectId,
   storageBucket: process.env.storageBucket,
};
