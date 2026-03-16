import express from 'express'

const app = express ()
app.use(express.json())

app.listen(PORT, () => {
    console.log('API rodando em: http://localhost:3000')
})