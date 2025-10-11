import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "../src/server";
import { WelcomeController } from "../src/app/Http/Controllers/WelcomeController";

describe("GET / WelcomeController", () => {
  let controller: WelcomeController;

  beforeAll(() => {
    // @ts-ignore
    controller = new WelcomeController(app);
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
    expect(res.body.error).toMatch(/missing/i);
  });

  it("should handle unexpected input gracefully", async () => {
    // @ts-ignore
    const res = await request(app).get("/").query({ extra: "123" });

    expect(res.statusCode).toBe(200);
    expect(res.body.template).toBe("index");
  });
});