import { initExpress, initRoute } from "../src/main"

describe("test", () => {
  const app = initExpress()
  initRoute(app)
  app.listen(5000)

  test("test", async () => {
    const resultFetch = await fetch("http://localhost:5000")
    expect(resultFetch.status).toBe(200)
  })
})
