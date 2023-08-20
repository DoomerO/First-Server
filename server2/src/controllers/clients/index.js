const knex = require("../../database/index");

module.exports = {
    async root(req, res) {
        try {
            return res.send("Response of Cliente Server");
        }
        catch(error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async searchClient(req, res){
        try {
            const result = await knex('Client');
            res.status(201).json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async createClient(req, res) {
        try {
           const {cli_name} = req.body;

           await knex('Client').insert({
                cli_name
           })

            return res.status(201).json({msg: "Client registred"});
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async searchClientName(req, res) {
        try {
            const {name} = req.params;
            const result = await knex('Client').where('cli_name', 'like', '%' + name + '%');
            return res.json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async searchClientCod(req, res) {
        try {
            const {cod} = req.params;
            const result = await knex('Client').where('cli_cod', 'like', '%' + cod + '%');
            return res.json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async updateClient(req, res) {
        try  {
            const {cod:cli_cod} = req.params;
            const {cli_name} = req.body;
            
            await knex('Client').update({
                cli_name
            }).where({cli_cod});

            return res.status(201).json({msg: "Client updated"});
        }
        catch(error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async deleteClient(req, res) {
        try {
            const {cod:cli_cod} = req.params;
            await knex('Client').where({cli_cod}).del();

            return res.status(201).json({msg: "Client Deleted"});
        }
        catch(error) {
            return res.status(400).json({error: error.mesage});
        }
    }
};