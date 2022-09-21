const { RESTDataSource } = require('apollo-datasource-rest');

class UsersAPI extends RESTDataSource {
    constructor(){
        super()
        this.baseURL = 'http://localhost:3000'
    }

    async getUsers () {
        const users = await this.get('/users');
        return users.map(async users => ({
            id: users.id,
            nome: users.nome,
            email:users.email,
            ativo:users.ativo,
            role: await this.get(`/roles/${users.role}`)
        }))
    }

    async getUserById(id) {
        return this.get(`users/${id}`)
    }
}

module.exports = UsersAPI