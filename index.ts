import express from 'express'
import cors from 'cors'
import { ref, deleteObject, listAll, getStorage } from 'firebase/storage'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from './cfg';

initializeApp(firebaseConfig);
const storage = getStorage();

const PORT = 5000;
const app = express();

app.use(cors())
app.use(express.json())

app.post('/', (req) => {
    setTimeout(() => {
        const listRef = ref(storage, `${String(req.body.id)}/`);
            listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef: any) => {
                    deleteObject(ref(storage, `${itemRef?._location?.path_}`))
                    .catch((error) => {
                        throw new Error(error);
                    });
                });
            })
            .catch((error) => {
                throw new Error(error);
            });
    }, 10000 * 6 * 3);
})


app.listen(PORT);