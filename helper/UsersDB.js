var fs = require('fs');

let users = require('./DummyData/Usuarios.json');

function createUser(user) {
    if (user.id === undefined) {
        user.id = users.length + 1;
    }
    users.push(user);
    saveData();
    return 0;
}

function getUserById(id) {
    return users.find(user => user.id == id);
}

function deleteUser(id) {
    let index = users.findIndex(u => u.id === id);
    users.splice(index, 1);
    saveData();
}

function updateUser(user) {
    let index = users.findIndex(u => u.id === user.id);
    users[index] = user;
    saveData();
}

function saveData() {
    fs.writeFileSync('./helper/DummyData/Usuarios.json', JSON.stringify(users));
}

export const UsersDB = {
    createUser,
    getUserById,
    deleteUser,
    updateUser,
    saveData
};
