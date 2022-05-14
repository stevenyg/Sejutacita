require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const axios = require('axios');


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/register', async (req, res) => {
    try {
        const { username, password, role } = req.body
        const payload = {
            username,
            password,
            role
        }
        const response = await axios.post(`${process.env.SERVICE_URL}/register`, payload)
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        const payload = {
            username,
            password,
        }
        const response = await axios.post(`${process.env.SERVICE_URL}/login`, payload)
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.post('/refresh', async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        const payload = {
            refreshToken
        }
        const response = await axios.post(`${process.env.SERVICE_URL}/refresh`, payload)
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.post('/refresh', async (req, res, next) => {
    try {
        const { refreshToken } = req.body;
        const payload = {
            refreshToken
        }
        const response = await axios.post(`${process.env.SERVICE_URL}/refresh`, payload)
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.post('/music', async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const { title, genre, singer } = req.body
        const payload = {
            title,
            genre,
            singer
        }
        const response = await axios.post(`${process.env.SERVICE_URL}/music`, payload, {
            headers: {
                access_token
            }
        })
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.get('/music', async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const response = await axios.get(`${process.env.SERVICE_URL}/music`, {
            headers: {
                access_token
            }
        })
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.put('/music/:_id', async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const { _id } = req.params
        const { title, genre, singer } = req.body
        const payload = {
            title,
            genre,
            singer
        }
        const response = await axios.put(`${process.env.SERVICE_URL}/music/${_id}`, payload, {
            headers: {
                access_token
            }
        })
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})

app.delete('/music/:_id', async (req, res, next) => {
    try {
        const { access_token } = req.headers
        const { _id } = req.params
        const response = await axios.delete(`${process.env.SERVICE_URL}/music/${_id}`, {
            headers: {
                access_token
            }
        })
        res.status(201).json(response.data)

    } catch (error) {
        res.status(401).send(error.response.data);
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
