import _ from 'lodash'

const MAX_LENGTH_OF_TAG_LABEL = 14
const PICK_TAG_LABEL_LETTER_LENGTH = 7

const labelMixin = {
  methods: {
    shouldOmitLengthOfTagLabel(label) {
      if (_.isString(label)) {
        if (label.length > MAX_LENGTH_OF_TAG_LABEL) {
          return true
        }
      }
      return false
    },
    omitLengthOfTagLabel(label) {
      console.log(label)
      if (this.shouldOmitLengthOfTagLabel(label)) {
        return `${label.substring(0, PICK_TAG_LABEL_LETTER_LENGTH)}...${label.substring(label.length - PICK_TAG_LABEL_LETTER_LENGTH, label.length)}`
      }
      return label
    }
  }
}

export default labelMixin
