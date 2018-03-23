// require all schemas
const ApplicationSchema = require('./schemas/Application');
const BrotherSchema = require('./schemas/Brother');
const FulltimeSchema = require('./schemas/Fulltime');
const InternshipSchema = require('./schemas/Internship');
const RegformSchema = require('./schemas/Regform');

// export all
module.exports = {
  ApplicationSchema,
  BrotherSchema,
  FulltimeSchema,
  InternshipSchema,
  RegformSchema
};
