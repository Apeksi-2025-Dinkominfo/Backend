import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPendaftar = async (req, res) => {
  try {
    const response = await prisma.datamunas.findMany();
    res.status(200).json(response);
  } catch (error) {
    res.status(error).json({ msg: error.message });
  }
};

export const getPendaftarById = async (req, res) => {
  try {
    const response = await prisma.datamunas.findUnique({
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
    const form = await prisma.datamunas.create({
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
    const form = await prisma.datamunas.update({
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
    const form = await prisma.datamunas.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(form);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
