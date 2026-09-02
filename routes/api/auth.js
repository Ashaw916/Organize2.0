const router = require('express').Router();
const Auth = require('../../models').Auth;

// auth Route
router.post('/', async (req, res) => {
  try {
    const userId = (req.body.user || '').replace(/['"]+/g, '');
    if (userId === 'null' || !userId) return res.send('invalid');
    const auth = await Auth.findOne({ where: { userId } });
    if (!auth) return res.send('invalid');
    return res.send(auth.bool ? 'valid' : 'invalid');
  } catch (err) {
    res.status(500).send('error');
  }
});

router.get('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
