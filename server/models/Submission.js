const mongoose = require('mongoose');

// The schema is designed to be highly flexible to accommodate dynamic form fields.
// The `data` field uses Mixed type to store any key-value pairs (question ID -> answer).
const SubmissionSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now
  },
  data: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
    default: {}
  },
  links: {
    type: [String],
    default: []
  },
  files: [{
    id: String,
    name: String,
    size: Number,
    type: { type: String }, // Explicit object definition because 'type' is a reserved Mongoose keyword
    dataUrl: String // Base64 encoded file data
  }]
}, { 
  strict: false,
  timestamps: true
});

module.exports = mongoose.model('Submission', SubmissionSchema);
