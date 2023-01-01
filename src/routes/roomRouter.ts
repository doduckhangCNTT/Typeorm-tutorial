import express from "express";
import roomCtrl from "../controllers/roomCtrl";

const router = express.Router();

router.post("/room", roomCtrl.createRoom);

router.get("/rooms", roomCtrl.getRooms);

router.get("/nameRoom", roomCtrl.getNameRoom);

router.route("/room/:id").put(roomCtrl.updateRoom).delete(roomCtrl.deleteRoom);

router.post("/room/:roomId/video", roomCtrl.createVideo);

router.post("/room/:roomId/subject", roomCtrl.roomSubject);

export default router;
