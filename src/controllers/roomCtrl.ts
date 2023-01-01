import { Request, Response } from "express";
import { Room } from "../entities/Room";
import { RoomRepository, roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";
import { videoRepository } from "../repositories/videoRepository";

const roomCtrl = {
  createRoom: async (req: Request, res: Response) => {
    try {
      const { name, description } = req.body;
      // const newRoom = roomRepository.create({ ...req.body });
      const newRoom = roomRepository.create({ name, description });

      await roomRepository.save(newRoom);

      res.json(newRoom);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  createVideo: async (req: Request, res: Response) => {
    try {
      const { title, url } = req.body;
      const { roomId } = req.params;

      const room = await roomRepository.findOneBy({ id: roomId });
      const newVideo = videoRepository.create({
        title,
        url,
        room,
      });
      await videoRepository.save(newVideo);
      res.json(newVideo);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  roomSubject: async (req: Request, res: Response) => {
    try {
      const { subject_id } = req.body;
      const { roomId } = req.params;

      const room = await roomRepository.findOneBy({ id: roomId });
      if (!room) return res.status(400).json({ msg: "Room not found" });

      const subject = await subjectRepository.findOneBy({ id: subject_id });
      if (!subject) return res.status(400).json({ msg: "Subject not found" });

      const roomUpdate = {
        ...room,
        subjects: [subject],
      };
      await roomRepository.save(roomUpdate);

      res.json({ msg: "Room updated successfully" });
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getRooms: async (req: Request, res: Response) => {
    try {
      const rooms = await roomRepository.find({
        relations: {
          subjects: true,
          videos: true,
        },
        cache: 30000,
      });

      res.json(rooms);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  // Custom Repository
  getNameRoom: async (req: Request, res: Response) => {
    try {
      const rooms = await RoomRepository.findByName(req.body.name);

      res.json(rooms);
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateRoom: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteRoom: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },
};

export default roomCtrl;
