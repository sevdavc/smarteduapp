const mongoose = require('mongoose');
const slugify = require('slugify');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  slug: {
    type: String,
    unique: true,
  },
});

courseSchema.pre('save', async (next) => {
  console.log(this.name);
  this.slug = await slugify(this.name, {
    lower: true,
    trim: true,
    strict: true,
  });
  next();
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
