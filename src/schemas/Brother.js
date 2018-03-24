// node modules
const mongoose = require('mongoose');

const { Schema } = mongoose;

const BrotherSchema = new Schema({
  key: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },

  name: {
    type: String,
    required: true,
    trim: true
  },

  pseClass: {
    type: {
      label: String,
      value: String
    },
    required: true
  },

  year: {
    type: {
      label: String,
      value: String
    },
    required: true
  },

  isExecutive: {
    type: {
      label: String,
      value: Boolean
    },
    required: true,
    default: false
  },

  position: {
    type: {
      label: String,
      value: String
    },
    required: true,
    default: 'Active'
  },

  hometown: {
    type: String,
    required: true,
    trim: true
  },

  majors: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: true
  },

  minors: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: false,
    default: []
  },

  careerInterests: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: true
  },

  previousPositions: {
    type: [
      {
        label: String,
        value: String
      }
    ],
    required: false,
    default: []
  },

  bio: {
    type: String,
    required: true,
    trim: true
  },

  mediaUrls: {
    type: {
      linkedin: Object,
      github: Object,
      medium: Object,
      quora: Object,
      twitter: Object,
      website: Object
    },
    required: true,
    default: {
      linkedin: {
        label: 'LinkedIn',
        iconClass: '',
        value: ''
      },
      github: {
        label: 'GitHub',
        iconClass: '',
        value: ''
      },
      medium: {
        label: 'LinkedIn',
        iconClass: '',
        value: ''
      },
      quora: {
        label: 'Quora',
        iconClass: '',
        value: ''
      },
      twitter: {
        label: 'Twitter',
        iconClass: '',
        value: ''
      },
      website: {
        label: 'Website',
        iconClass: '',
        value: ''
      }
    }
  }
});

module.exports = BrotherSchema;
