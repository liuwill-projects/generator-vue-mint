import Router from 'koa-router'

const root = new Router()
const api = new Router()

root.get('/', async (ctx, next) => {
  await ctx.render('index', {
      env : process.env.NODE_ENV
  });
});

api.get('/data', async (ctx, next) => {
  ctx.body = {status:"0",msg:"succss",data:"hello"}
});

router.use('/api', api.routes(), api.allowedMethods())
export default router;