const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea x hacer'

}

const completado = {
    defaul: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear un una nueva tarea x hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea no deseada', {
        descripcion
    })
    .help()
    .argv



module.exports = {
    argv
}