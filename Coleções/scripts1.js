function getAdmins(map){
    let admins = [];

    for([key, value] of map){
        if (value === 'Admin') {
            admins.push(key);            
        }
    }
    return admins;
}

const usuarios = new Map();

usuarios.set('Lucas','Admin');
usuarios.set('Mabi','Admin');
usuarios.set('Pedro','User');
usuarios.set('Jorge','Admin');

console.log(getAdmins(usuarios));