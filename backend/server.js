import express from 'express';
import cors from 'cors';    
const app = express();
const PORT = process.env.PORT || 3000;



app.get('/api/jokes' ,(req, res) => {
    const jokes=[
        {
            id: 1,
            title: 'Why did the chicken cross the road?',
            content: 'To get to the other side!'
        },
        {
            id: 2,
            title: 'What do you call fake spaghetti?',
            content: 'An impasta!'
        },
        {
            id: 3,
            title: 'Why don’t scientists trust atoms?',
            content: 'Because they make up everything!'
        }
    ]
    res.send(jokes);
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})