const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost/mymoney');

mongoose.Error.Messages.general.required = "The field '{PATH}' is required";
mongoose.Error.Messages.Number.min = 'The value must by greater than {MIN}';
mongoose.Error.Messages.Number.max = 'The value must by less than {MAX}';
mongoose.Error.Messages.String.enum = "The value is not valid for the field '{PATH}'";
