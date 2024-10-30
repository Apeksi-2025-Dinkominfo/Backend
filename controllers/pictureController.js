import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getPicture = async (req, res) => {
    try {
        const response = await prisma.photo.findMany();
        res.status(200).json(response);
      } catch (error) {
        res.status(error).json({ msg: error.message });
      }
    };


export const createPicture = async (req, res) => {try {
    if (req.file) {
      const imageUrl = `${req.protocol}://${req.get('host')}/images/${
        req.file.filename
      }`;
      const response = await prisma.photo.create({
        data: {
          ...req.body,
          url: imageUrl,
        },
      });
      res.status(200).json(response);
    } else {
      res.status(400).json({ msg: 'No image uploaded' });
    }
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const deletePicture = async (req, res) => {try {
    const response = await prisma.photo.delete({
      where: {
        id: Number(req.params.id),
      },
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
