const Koa = require('koa');
const {koaBody} = require('koa-body');
const path = require('path');
const render = require('koa-ejs');
const productRoutes = require('./routes/productRoutes');
// const viewRoutes = require('./routes/viewRoutes');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),
  layout: 'productList',  // layout mặc định
  viewExt: 'html',
  cache: false,
  debug: true
});

app.use(koaBody());
app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());
// app.use(viewRoutes.routes());
// app.use(viewRoutes.allowedMethods());

app.listen(5000);
