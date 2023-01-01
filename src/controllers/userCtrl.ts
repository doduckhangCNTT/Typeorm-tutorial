import { Request, Response } from "express";

const userCtrl = {
  createUser: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  getUsers: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  updateUser: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },

  deleteUser: async (req: Request, res: Response) => {
    try {
    } catch (error: any) {
      res.status(500).json({ msg: error.message });
    }
  },
};

export default userCtrl;
