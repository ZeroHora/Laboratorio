'use strict';

const knex = require('../adaptersDB/connectionDB')
const tabela ='usuario'

exports.get = async() => {

    const res = await knex
                    .select('*')
                    .from(tabela)
                    .orderBy('name', 'asc')
    return res
}

exports.getById = async(id) => {

    const res = await knex
                    .select('*')
                    .from(tabela)
                    .where(knex.raw('id = ?', id))
    return res
}

exports.create = async(objeto) => {
   
    const res = await knex (tabela)
                     .insert(objeto)
    return res
}

exports.update = async(id,user) => {
   
    const res = await knex(tabela)
                    .update(objeto)
                    .where(knex.raw('id = ?', id))
    return res
}

exports.delete = async(id) => {
   
    const res = await knex
                     .delete()
                     .from(tabela)
                     .where(knex.raw('id = ?', id))
    return res
}
