const mongoose = require('mongoose');
const config = require('../config.js')
const defaultImageURL = config.defaultImageURL

const qaSchema = new mongoose.Schema({
    qaID: {
        type: String,
        require: true,
        unique: true
    },
    questionerID: {
        type: String,
        require: true
    },
    questionerName: {
        type: String,
        require: true
    },
    questionerAvatar: {
        type: String,
        require: true,
        default: defaultImageURL
    },
    questionerFaculty: {
        type: String
    },
    questionerType: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    tag: {
        type: String,
        require: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    isReplyed: {
        type: Boolean,
        default: false
    },
    replys: [{
        replyerName: {
            type: String,
            require: true
        },
        replyerType: {
            type: String,
            require: true
        },
        replyerAvatar: {
            type: String,
            require: true,
            default: defaultImageURL
        },
        created: {
            type: Date,
            default: Date.now

        },
        content: {
            type: String,
            require: true
        },
        isAccepted: {
            type: Boolean,
            default: false
        }
    }],
    replysLength: {
        type: Number,
        default: 0
    }
});

qaSchema.index({ 
  title: 'text',
  content: 'text',
  tag: 'text',
  'replys.content': 'text'
})

module.exports = mongoose.model('qa', qaSchema)