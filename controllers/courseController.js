const courseModel = require('../models/course');

exports.createCourse = async (req, res) => {
  const course = await courseModel.create(req.body);
  try {
    res.status(201).json({
      status: 'success',
      course,
    });
  } catch (err) {
    res.status(400).json({
      status: 'failed',
      err,
    });
  }
};
