const Koa = require('koa');
const { koaBody } = require('koa-body');
const productRoutes = require('./routes/productRoutes');

const app = new Koa();

app.use(koaBody());
app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
