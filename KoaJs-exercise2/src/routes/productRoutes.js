const Router = require('koa-router');
const productHandler = require('../handlers/productHandlers');
const {getAll: getAllProducts, getOne: getOneProduct } = require('../database/productRepository');
const productInputMiddleWare = require('../middleware/productInputMiddleware');

const router = new Router();

// Route để render trang HTML cho danh sách sản phẩm
router.get('/products', async (ctx) => {
  try {
    const products = getAllProducts();
    await ctx.render('products', { products });
  } catch (e) {
    ctx.status = 404;
    ctx.body = { success: false, error: e.message };
  }
});

// Route để render trang HTML cho một sản phẩm cụ thể
router.get('/products/:id', async (ctx) => {
  try {
    const { id } = ctx.params;
    const product = getOneProduct(id);
    if (product) {
      await ctx.render('product', { product });
    } else {
      throw new Error('Product Not Found!');
    }
  } catch (e) {
    ctx.status = 404;
    ctx.body = { success: false, error: e.message };
  }
});

router.get('/api/products', productHandler.getProducts);
router.get('/api/products/:id', productHandler.getProduct);
router.post('/api/products', productInputMiddleWare, productHandler.save);
router.put('/api/products/:id', productHandler.update);
router.delete('/api/products/:id',productInputMiddleWare, productHandler.deleteProduct);

module.exports = router;
