exports.getIndexPage = (req, res) => {
  res.render('index', {
    page_name: 'index',
  });
};

exports.getAboutPage = (req, res) => {
  res.render('about', {
    page_name: 'about',
  });
};

exports.getCoursesPage = (req, res) => {
  res.render('courses', {
    page_name: 'courses',
  });
};
