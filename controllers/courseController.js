const Course = require('../models/course');
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

exports.getAllCourses = async (req, res) => {
  const allcourses = await courseModel.find();
  res.render('courses', {
    page_name: 'courses',
    courses: allcourses,
  });
};

exports.getCourse = async (req, res) => {
  const course = await Course.findById({ _id: req.params.id });
  res.render('course-single', {
    course,
    page_name: 'course-single',
  });
};
