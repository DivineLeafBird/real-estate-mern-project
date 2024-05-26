import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    mesage: "Hello World",
  });
});
export default router;
