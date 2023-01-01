import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

const videoCtrl = {
  createVideo: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      if (!name) return res.status(400).json({ msg: "Name is required" });

      const newSubject = subjectRepository.create({ name });

      await subjectRepository.save(newSubject);

      res.json(newSubject);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getVideos: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateVideo: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteVideo: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },
};

export default videoCtrl;
