import express from "express";
import videoCtrl from "../controllers/videoCtrl";

const router = express.Router();

router.post("/video", videoCtrl.createVideo);

router.get("/videos", videoCtrl.getVideos);

router
  .route("/video/:id")
  .put(videoCtrl.updateVideo)
  .delete(videoCtrl.deleteVideo);

export default router;
