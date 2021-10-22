const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Heyy! WOW! learning node for the second time')
})

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: "01788888888" },
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabanti', email: 'Shrabanti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Shuchorita', email: 'Shuchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }

})

//app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body);
    // res.send('inside post')
    res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);

    console.log(req.params.id);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'oranges', 'fazli'])
})


app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy yummy tok marka fazli!')
})


app.listen(port, () => {
    console.log('Listening to port', port)
})