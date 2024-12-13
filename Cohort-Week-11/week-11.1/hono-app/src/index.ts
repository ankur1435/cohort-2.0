import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  // context of this request, request, response
  if(c.req.header("Authorization")) {
    await next()
  } else {
    return c.text("You dont have access")
  }
} 

// fetch => json
app.post('/', authMiddleware, async (c) => {
  const body = await c.req.json()

  console.log(body);
  console.log(c.req.header("Authentication"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
