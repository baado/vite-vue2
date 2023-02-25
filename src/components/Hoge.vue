<template>
  <div
    class="item"
    effect="light"
    placement="bottom"
    :disabled="!shouldOmitLengthOfTagLabel(label)"
  >
    <div slot="content">
      {{ label }}
    </div>
    <slot name="label">
      <span>
        {{ omitLengthOfTagLabel(label) }}
      </span>
    </slot>
  </div>
</template>

<script>
import labelMixin from '@/commonMixin/labelMixin'
export default {
  mixins: [labelMixin],
  props: {
    label: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>
