const Koa = require("koa");
const Router = require("@koa/router");
const {url} = require("@koa/router");

const app = new Koa();
const router = new Router();

router.get("/", ctx => {
	ctx.body = "Hello";
});
router.get("/iletisim", ctx => {
	ctx.body = "<h1> İletişim </h1>";
});
router.get("/hakkimda", ctx => {
	ctx.body = "<h1> Hakkımda </h1>";
});

app.use(router.routes());

app.listen(3000);
