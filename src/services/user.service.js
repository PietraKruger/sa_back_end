const users = [
    {id: 1, nome: "Pietra"}
]

class userService {
    getall(){
    return users
    }

    getById(){
    return users.find((u) => u.id === parseInt(id))
    }
}

export const userService = new userService()