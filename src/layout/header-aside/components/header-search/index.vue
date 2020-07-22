<template>
  <ui-button class="ui-mr btn-text can-hover" type="text" @click="handleClick">
    <ui-icon-fa name="search" style="font-size: 18px;"/>
  </ui-button>
</template>

<script>
export default {
  methods: {
    handleClick () {
      this.$emit('click')
    }
  }
}
</script>
