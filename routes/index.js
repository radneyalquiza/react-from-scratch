import express from 'express';

const router = express.Router();

router.get('*', (req, res) => {
  if (true) {
    throw new Error('Oops');
  }
  res.render('index');
});

export default router;
