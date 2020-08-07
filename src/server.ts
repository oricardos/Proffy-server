import express from 'express'

const app = express()

app.use(express.json())

// MÉTODOS HTTP
// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// PARÂMETROS
// Corpo (Request Body): Dados para criação ou atualização de um registro
// Route Params: Identificar qual recurso eu quero atualizar ou deletar
// Query Params: Paginação, filtros, ordenação

app.get('/', (request, response) => {
    return response.json({ message: 'hello'})
})

app.listen(3333)

