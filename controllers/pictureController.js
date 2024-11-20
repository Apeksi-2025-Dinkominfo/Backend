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


    export const createPicture = async (req, res) => {
      try {
        if (req.files && req.files.length > 0) {
          // Mapping file URLs
          const images = req.files.map((file) => {
            return {
              url: `${req.protocol}://${req.get('host')}/images/${file.filename}`,
              photoType: req.body.photoType, // Dapat diambil dari req.body jika sama untuk semua file
            };
          });
    
          // Simpan data ke database
          const responses = await prisma.photo.createMany({
            data: images,
            skipDuplicates: true, // Agar tidak duplikat jika ada kesalahan
          });
    
          res.status(200).json({
            msg: 'Images uploaded successfully',
            data: responses,
          });
        } else {
          res.status(400).json({ msg: 'No images uploaded' });
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
