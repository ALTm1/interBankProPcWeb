<template>
  <ui-tooltip
    effect="dark"
    :content="active ? $t('layout.header-aside.header-fullscreen.exit') : $t('layout.header-aside.header-fullscreen.active')"
    placement="bottom">
    <ui-button class="ui-mr btn-text can-hover" type="text" @click="toggle">
      <ui-icon-fa v-if="active" name="compress"/>
      <ui-icon-fa v-else name="arrows-alt" style="font-size: 16px"/>
    </ui-button>
  </ui-tooltip>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('vxadmin/fullscreen', [
      'active'
    ])
  },
  methods: {
    ...mapActions('vxadmin/fullscreen', [
      'toggle'
    ])
  }
}
</script>
