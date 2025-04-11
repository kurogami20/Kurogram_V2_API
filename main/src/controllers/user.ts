import { Hono } from "hono";

const userController = new Hono();

userController.basePath("/user").get("/", async (c) => {
  c.json({ all: "user" });
});
