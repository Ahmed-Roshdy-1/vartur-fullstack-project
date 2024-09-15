
import multer from 'multer';
import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

// Set up Multer for handling file uploads
const upload = multer({ dest: 'public/uploads' });

export default defineEventHandler(async (event) => {
  // Handle file upload
  await new Promise((resolve, reject) => {
    upload.single('image')(event.node.req, event.node.res, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  // Get the uploaded file
  const file = event.node.req.file;

  if (!file) {
    throw new Error('No file uploaded.');
  }

  // Resize the image using Sharp
  const outputPath = path.join('public/uploads', `resized-${file.filename}.jpg`);

  try {
    await sharp(file.path)
      .resize(3200, 3200)
      .toFile(outputPath);

    // Optionally delete the original uploaded file
    fs.unlinkSync(file.path);

    // TODO: Save file path and other relevant data to the database using Prisma

    return {
        success: true,
        message: 'Image uploaded and resized successfully.',
        fileUrl: `/uploads/resized-${file.filename}.jpg`,
    };
  } catch (error) {
    throw new Error(`Image processing failed: ${error.message}`);
  }
});
