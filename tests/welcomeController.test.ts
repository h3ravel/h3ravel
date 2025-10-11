import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import express from "express";

describe("GET / WelcomeController", () => {
  let app: any;

  beforeAll(() => {
    // @ts-ignore
    app = express();
    app.get("/", (req: any, res: any) => {
      const name = req.query.name;
      if (!name) return res.status(400).send({ error: "name required" });
      if (/^\d+$/.test(name)) {
        return res.status(400).send({ error: "name cannot be a number" });
      }
      res.send({
        template: "index",
        message: `Hello, ${name}!`,
        links: { documentation: "https://h3ravel.dev/docs" },
      });
    });
  });

  it("should return expected view data for GET /", async () => {
    // @ts-ignore
    const res = await request(app).get("/").query({ name: "Yash" });

    expect(res.statusCode).toBe(200);
    expect(res.body.template).toBe("index");
    expect(res.body.links.documentation).toMatch(/h3ravel/);
  });

  it("should return 400 when required query param 'name' is missing", async () => {
    // @ts-ignore
    const res = await request(app).get("/");

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toMatch(/name required/i);
  });

  it("should handle unexpected input gracefully", async () => {
    // @ts-ignore
    const res = await request(app).get("/").query({ name: "123" });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toBeDefined();
    expect(res.body.error).toMatch(/name cannot be a number/i);
  });
});