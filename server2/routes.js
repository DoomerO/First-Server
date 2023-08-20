const express = require('express');

const controllersProds = require('./src/controllers/products/index');
const controllersClient = require('./src/controllers/clients/index');
const controllersSales = require('./src/controllers/sales/index');

const routes = express.Router();

routes.get('/',controllersProds.root);

routes.get('/entclis', controllersClient.searchClient);
routes.get('/clients/name/:name', controllersClient.searchClientName);
routes.get('/clients/cod/:cod', controllersClient.searchClientCod);

routes.get('/products',controllersProds.searchProds);
routes.get('/products/name/:name',controllersProds.searchProdName);
routes.get('/products/cod/:cod',controllersProds.searchProdCod);

routes.get('/sales', controllersSales.searchSale);
routes.get('/sales/cod/:cod', controllersSales.searchSaleCode);

routes.post('/clients', controllersClient.createClient);

routes.post('/products', controllersProds.createProd);

routes.post('/sales', controllersSales.createSale);

routes.put('/clients/:cod', controllersClient.updateClient);

routes.put('/products/:cod', controllersProds.updateProd);

routes.delete('/clients/:cod', controllersClient.deleteClient);

routes.delete('/products/:cod', controllersProds.deleteProd);

routes.delete('/sales/:cod', controllersSales.deleteSale);

module.exports = routes;