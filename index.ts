import express from 'express'
import cors from 'cors'
import { ref, deleteObject, listAll } from 'firebase/storage'

const PORT = 5000;
const app = express();

app.use(cors())
app.use(express.json())

app.post('/', (req) => {
    setTimeout(() => {
        const listRef = ref(req.body.storage, req.body.id);
            listAll(listRef)
            .then((res) => {
                res.items.forEach((itemRef: any) => {
                    deleteObject(ref(req.body.storage, `${itemRef._location.path_}`))
                    .then(() => {
                        console.log('its okey!')
                    })
                    .catch((error) => {
                        console.log(error)
                    });
                });
            })
            .catch((error) => {
                console.log(error)
            });
    }, 20000);
})


app.listen(PORT);