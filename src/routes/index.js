const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html', { title: 'Finerio Examen' });
});

router.get('/contact', (req, res) => {
  res.render('contact.html', { title: 'Contact Page' });
});

router.get('/signin', (req, res) => {
  res.render('signin.html', { title: 'Movimientos Page' });
});

router.get('/modal', (req, res) => {
  res.render('modal.html', { title: 'Error Page' });
});

module.exports = router;
