const express = require('express');

const customerRouter = require('./customer.routes')
const articleRouter = require('./article.routes')
const adminRouter = require('./admin.routes')
const notificationRouter = require('./notification.routes')
const fileUploadRouter = require('./fileUpload.routes')

const router = express.Router();

router.use('/customer', customerRouter);
router.use('/article', articleRouter);
router.use('/admin', adminRouter);
router.use('/notification', notificationRouter);
router.use('/image', fileUploadRouter);


module.exports = router;