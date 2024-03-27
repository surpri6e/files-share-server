import express from 'express';
import cors from 'cors';
import { ref, deleteObject, listAll, getStorage } from 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './config';
import { throwError } from './utils/throwError';

initializeApp(firebaseConfig);
const storage = getStorage();

const PORT = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.post('/', (req) => {
   setTimeout(() => {
      const listRef = ref(storage, `${String(req.body.id)}/`);
      listAll(listRef)
         .then((res) => {
            res.items.forEach((itemRef: any) => {
               deleteObject(ref(storage, `${itemRef?._location?.path_}`)).catch((err) => {
                  throwError(err);
               });
            });
         })
         .catch((err) => {
            throwError(err);
         });
   }, 10000 * 6 * 3); // Timer on 3 minutes
});

app.listen(PORT);
