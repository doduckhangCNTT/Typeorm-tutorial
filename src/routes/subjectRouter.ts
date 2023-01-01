import express from "express";
import subjectCtrl from "../controllers/subjectCtrl";

const router = express.Router();

router.post("/subject/:roomId", subjectCtrl.createSubject);

router.get("/subjects", subjectCtrl.getSubjects);

router
  .route("/subject/:id")
  .put(subjectCtrl.updateSubject)
  .delete(subjectCtrl.deleteSubject);

export default router;
