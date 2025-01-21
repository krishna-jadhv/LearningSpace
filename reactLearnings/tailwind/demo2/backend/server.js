import express from 'express';

const app = express();
// const cors= require('cors')

// app.use(cors())

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: 'Why don\'t scientists trust atoms?',
            content: 'Because they make up everything.',
        },
        {
            id: 2,
            title: 'Why don\'t eggs tell jokes?',
            content: 'They \'d crack each other up.',
        },
        {
            id: 3,
            title: 'Why don\'t lobsters share?',
            content: 'Because they\'re shellfish.',
        },
        {
            id: 4,
            title: 'Why don\'t oranges stop in the middle of the road?',
            content: 'Because they run out of juice.',
        }
    ]
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log(`Server at http://localhost:${port}`);

    
})