<template>
  <ui-button-group>
    <ui-button v-if="title" size="mini" @click="$open(link)">{{title}}</ui-button>
    <ui-button size="mini" @click="$open(link)">
      <ui-icon-fa :name="icon" />
      {{link}}
    </ui-button>
  </ui-button-group>
</template>

<script>
export default {
  name: 'ui-link-btn',
  props: {
    title: {
      type: String,
      required: false,
      default: ''
    },
    icon: {
      type: String,
      required: false,
      default: 'link'
    },
    link: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
