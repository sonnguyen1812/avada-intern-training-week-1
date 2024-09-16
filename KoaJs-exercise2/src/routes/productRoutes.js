const Router = require('koa-router');
const productHandler = require('../handlers/productHandlers');

const router = new Router({
  prefix: '/api'
});

router.get('/products', productHandler.getProducts);
router.get('/products/:id', productHandler.getProduct);
router.post('/products', productHandler.save);
router.put('/products/:id', productHandler.update);
router.delete('/products/:id', productHandler.deleteProduct);

module.exports = router;
