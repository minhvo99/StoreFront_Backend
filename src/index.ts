import express from 'express'
import cors from 'cors'
const app = express();
const port = 3000
interface  Article {
    
}
app.use(cors())

app.get('/', (req: express.Request, res: express.Response)=> {
    res.send('Storefront Backend project Udacity')
})


app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
    
})