const Router = require('koa-router');
const productHandler = require('../handlers/productHandlers');
const {getAll: getAllProducts, getOne: getOneProduct } = require('../database/productRepository');
const productInputMiddleWare = require('../middleware/productInputMiddleware');



const router = new Router();

router.get('/products',async(ctx)  => {
  const products = getAllProducts;
  await ctx.render('productList', {
    products
  })
});

router.get('/products/:id',async(ctx)  => {
  const productGetOne = getOneProduct;
  await ctx.render('productDetail', {
    productGetOne
  })
});

router.get('/api/products', productHandler.getProducts);
router.get('/api/products/:id', productHandler.getProduct);
router.post('/api/products', productInputMiddleWare, productHandler.save);
router.put('/api/products/:id', productHandler.update);
router.delete('/api/products/:id',productInputMiddleWare, productHandler.deleteProduct);

module.exports = router;
