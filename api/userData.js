const shortid = require('shortid');

let users = [
    {
    id:shortid.generate(),
    name:"ozzy",
    bio:"Not Ozzy Osbourne, Ozzy Lievano"
},
    {id:shortid.generate(),
    name:"Lola",
    bio:"its lola"
}
]

module.exports = {
    findAll(){
        return Promise.resolve(users)
    },

    findById(id){
        const user = users.find(u => u.id === id)
        return Promise.resolve(user)
    },

    create({name, bio}){
        const newUser = {id:shortid.generate(),name,bio}
        users.push(newUser)
    },

    update(id,changes){
        const user = users.find(user => user.id === id)
        if(!user) return
        Promise.resolve(null)

        const updatedUser = {...changes,id}
        users = users.map(u => (u.id ===id)?updatedUser : u)
        return Promise.resolve(updatedUser)
    },

    delete(id){
        const user = users.find(user => user.id === id)
        if(!user) return Promise.resolve(null)

        users = users.filter(u => u.id !== id)
        return Promise.resolve(user)
    }
}
