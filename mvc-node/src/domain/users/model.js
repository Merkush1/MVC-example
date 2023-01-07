let users = [
    {id: '1', username: 'TestUserAnton', age: "25"}
]
//Model implements business-logic of our app, so we have to have a various number of methods: 1) creating users 2) removing users by his id and etc.

module.exports = {
    create: ({ username, age }) => {
        const newUser = {
            username,
            age,
            id: String(Date.now())
        }
        if (!users.find(user => user.username === users)) {
            users.push(newUser)
        } else {
            throw new Error ('Пользователь уже существует')
        }
        return newUser;
    },
    removeById: ({ id }) => {
        const userIndexById = users.findIndex(user => user.id === String (id));

        if(userIndexById === -1) {
            throw new Error('Пользователь не найден')
        }

        users.splice(userIndexById, 1);

        return id;
    },
    removeByUsername: ({ username }) => {
        const userIndexByUsername = users.findIndex(user => user.username === String (username));

        if(userIndexByUsername === -1) {
            throw new Error('Пользователь не найден')
        }

        users.splice(userIndexByUsername, 1);

        return username;

    },

    getAll: () => {
        return users;
    },
    getById: ({id}) => {
        return users.find (user => user.id === id);
    }

}