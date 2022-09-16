const arrayUsers = [
    {
        nome: "Julio",
        ativo: true
    },
    {
        nome: "Maria",
        ativo: true
    }
]

const userResolvers = {
    Query: {
        users: () => arrayUsers,
        primeiroUser: () => arrayUsers[0]
    }
}

module.exports = userResolvers