const filmes = [
    {id: 1, nome:"Pecadores"},
    {id: 2, nome:"Homem Aranha Longe de Casa"},
    {id: 3, nome:"Hamlet"},
    {id: 4, nome:"Matrix"},
    {id: 5, nome:"Premonição"},
    {id: 6, nome:"A Bruxa de Blair"},
    {id: 7, nome:"Mamma Mia"},
    {id: 8, nome:"A Casa Monstro"},
    {id: 9, nome:"A Convenção das Bruxas"},
    {id: 10, nome:"Abracadabra"}
]

class FilmesService {
    getAll(){
        return filmes;
    }

    getById(id){
        return filmes.find((filmes) => filmes.id === id)
    }
}

export const filmesService = new FilmesService();