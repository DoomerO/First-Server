const knex = require('../../database/index');

module.exports = {
    async root(req, res) {
        try {
            return res.send('Response of Root Server')
        }
        catch(error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async searchSale(req, res) {
        try {
            const result = await knex('Sale');
            res.status(201).json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async createSale(req, res) {
        try {
            const {Product_prod_cod} = req.body;
            const {Client_cli_cod} = req.body;
            const {sal_date} = new Date().toISOString;

           await knex('Sale').insert({
                Product_prod_cod,
                Client_cli_cod,
                sal_date
           })

            return res.status(201).json({msg: "Sale created"});
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async searchSaleCode(req, res) {
        try {
            const {cod} = req.params;
            const result = await knex('Sale').where('sale_cod', 'like', '%' + cod + '%');
            return res.json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.mesage});
        }
    },

    async deleteSale(req, res) {
        try {
            const {cod:sale_cod} = req.params;
            await knex('Sale').where({sale_cod}).del();

            return res.status(201).json({msg: "Sale deleted"});
        }
        catch(error) {
        return res.status(400).json({error: error.mesage});
        }
    }
};