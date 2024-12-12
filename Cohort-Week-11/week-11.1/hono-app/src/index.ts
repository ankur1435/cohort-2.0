import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authentication"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app
