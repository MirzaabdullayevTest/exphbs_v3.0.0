const express = require('express')
const app = express()
const path = require('path')
const exhbs = require('express-handlebars')

const hbs = exhbs.create({
    defaultLayout: 'main.hbs',
    extname: 'hbs',
})

app.use(express.static(path.join(__dirname, 'public')))

app.engine('hbs', hbs.engine)
app.set('views engine', 'hbs')
app.set('views', 'views')

app.get('/', (req, res) => {
    res.render('index.hbs', {
        title: 'Index',
        isTrue: true
    })

})

app.get('/contact', (req, res) => {
    res.render('contact.hbs', {
        title: 'Contact'
    })
})


const port = 3000
app.listen(port, () => {
    console.log(`Express working on ${port} port....`);
})