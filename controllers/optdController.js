import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPendaftar = async (req, res) => {
  try {
    const response = await prisma.optd.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(error).json({ msg: error.message });
  }
};

export const getPendaftarById = async (req, res) => {
  try {
    const response = await prisma.optd.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(404).json({ msg: error.message });
  }
};

export const createPendaftar = async (req, res) => {
  try {
    const form = await prisma.optd.create({
      data: {
        ...req.body,
      },
    });

    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const updatePendaftar = async (req, res) => {
  try {
    const form = await prisma.optd.update({
      where: {
        id: Number(req.params.id),
      },
      data: {
        ...req.body,
      },
    });

    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePendaftar = async (req, res) => {
  try {
    const form = await prisma.optd.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
