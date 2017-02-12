import path from 'path'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import logger from 'koa-logger'
import session from 'koa-session'
import serve from 'koa-static'
import views from 'koa-views'
import convert from 'koa-convert'
import root from './server/routers'
const env = process.env.NODE_ENV || 'development'

const app = new Koa()

app.use(views(path.join(__dirname, './server/views'), {
  map: {
    html: 'nunjucks'
  }
}))
app.use(logger())
app.use(bodyParser())

app.keys = ['some secret hurr']
app.use(convert(session({key:'auto:gen'}, app)))
app.use(serve(path.join(__dirname, './server/public')))

app.use(async function (ctx, next) {
    try {
        await next()
    } catch (err) {

        if (env !== 'production') {
            console.error(err, err.stack)
        } else {
            console.error(err)
        }
        ctx.status = err.status || 200
        ctx.body = {
            status: 500,
            msg: err.message || err.toString(),
        }
    }
})

app
  .use(root.routes())
  .use(root.allowedMethods())

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST)

console.log(`url: http://${HOST}:${PORT}`)
