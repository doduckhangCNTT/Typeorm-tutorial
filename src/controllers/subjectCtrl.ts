import { Request, Response } from "express";
import { Room } from "../entities/Room";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";

const subjectCtrl = {
  createSubject: async (req: Request, res: Response) => {
    try {
      const { name } = req.body;
      const { roomId } = req.params;
      if (!name) return res.status(400).json({ msg: "Name is required" });

      // Tao moi sach
      const newSubject = subjectRepository.create({ name });
      const room = await roomRepository.find({
        relations: {
          subjects: true,
        },
        where: {
          id: roomId,
        },
      });
      // Cho quyển sách mới vào bên trong danh sách các sách của room đó
      const data = room.map((r) => {
        return r.id === roomId
          ? { ...r, subjects: [...r.subjects, newSubject] }
          : r;
      });
      // Luu du lieu
      await subjectRepository.save(newSubject);
      await roomRepository.save(data);
      res.json(newSubject);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getSubjects: async (req: Request, res: Response) => {
    try {
      const subjects = await subjectRepository.find({
        relations: {
          rooms: true,
        },
      });

      res.json(subjects);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateSubject: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteSubject: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },
};

export default subjectCtrl;
