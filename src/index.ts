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
app.get('/articles', (req: express.Request, res: express.Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.get('/articles/:id', (req: express.Request, res: express.Response) => {
    try {
       res.send('this is the SHOW route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.post('/articles', (req: express.Request, res: express.Response) => {
    const article: Article = {
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.put('/articles/:id', (req: express.Request, res: express.Response) => {
    const article: Article = {
      id: req.params.id, 
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.delete('/articles/:id', (req: express.Request, res: express.Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.listen(port, ()=> {
    console.log(`Server is running on port http://localhost:${port}`);
    
})