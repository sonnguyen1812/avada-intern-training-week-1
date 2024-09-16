const Koa = require('koa');
const {koaBody} = require('koa-body');
const path = require('path');
const render = require('koa-ejs');
const productRoutes = require('./routes/productRoutes');
// const viewRoutes = require('./routes/viewRoutes');

const app = new Koa();

render(app, {
  root: path.join(__dirname, 'views'),   // Đường dẫn đến thư mục chứa views
  layout: false,                         // Không sử dụng layout mặc định
  viewExt: 'ejs',                        // Đuôi file mặc định là .ejs
  cache: false,                          // Không cache view (phù hợp cho môi trường phát triển)
  debug: true
});

app.use(koaBody());
app.use(productRoutes.routes());
app.use(productRoutes.allowedMethods());
// app.use(viewRoutes.routes());
// app.use(viewRoutes.allowedMethods());

app.listen(5000, () => {
  console.log('http://localhost:5000');
});