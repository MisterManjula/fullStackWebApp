// eslint-disable-next-line 
/* eslint-disable */
console.log('Hello World!');

const express = require('express'),
    const bodyParser = require('body-parser'),
        const cors = require('cors'),
            const morgan = require('morgan'),
                const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.post('/register', (req, res) => {
    res.send({
        'Message': `Hello ${req.body.email}! your user was registered!`
    });
});

app.get('/status', (req, res) => {
    res.send({
        'Message': 'Hello Nelson!, I \'m ready to go!'
    })
})

app.listen(process.env.PORT || 8080);