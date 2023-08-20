const knex = require('../../database/index');

module.exports = {
    async root(req, res) {
        try {
            return res.send('Response of Root Server')
        }
        catch(error) {
            return res.status(400).json({error: error.message});
        }
    },

    async searchProds(req, res) {
        try {
            const result = await knex('Product');
            res.status(201).json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async createProd(req, res) {
        try {
           const {prod_quant} = req.body;
           const {prod_name} = req.body;

           await knex('Product').insert({
                prod_quant,
                prod_name
           })

            return res.status(201).json({msg: "Product registred"});
        }
        catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async searchProdName(req, res) {
        try {
            const {name} = req.params;
            const result = await knex('Product').where('prod_name', 'like', '%' + name + '%');
            return res.json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async searchProdCod(req, res) {
        try {
            const {cod} = req.params;
            const result = await knex('Product').where('prod_cod', 'like', '%' + cod + '%');
            return res.json(result)
        }
        catch (error) {
            return res.status(400).json({error: error.message});
        }
    },

    async updateProd(req, res) {
        try  {
            const {cod:prod_cod} = req.params;
            const {prod_quant} = req.body;
            const {prod_name} = req.body;
            
            await knex('Product').update({
                prod_quant,
                prod_name
            }).where({prod_cod});

            return res.status(201).json({msg: "Product updated"});
        }
        catch(error) {
            return res.status(400).json({error: error.message});
        }
    },

    async deleteProd(req, res) {
        try {
            const {cod:prod_cod} = req.params;
            await knex('Product').where({prod_cod}).del();

            return res.status(201).message("Product deleted");
        }
        catch(error) {
            return res.status(400).json({error: error.message});
        }
    }
}
