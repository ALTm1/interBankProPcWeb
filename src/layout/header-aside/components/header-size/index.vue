<template>
  <ui-dropdown placement="bottom" size="small" @command="handleChange">
    <ui-button class="ui-mr btn-text can-hover" type="text">
      <ui-icon-fa name="font" style="font-size: 16px;"/>
    </ui-button>
    <ui-dropdown-menu slot="dropdown">
      <ui-dropdown-item v-for="item in options" :key="item.value" :command="item.value">
        <ui-icon-fa :name="iconName(item.value)" class="ui-mr-5"/>{{item.label}}
      </ui-dropdown-item>
    </ui-dropdown-menu>
  </ui-dropdown>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  name: 'ui-header-size',
  computed: {
    ...mapState('vxadmin/size', [
      'value'
    ]),
    options () {
      return [
        { label: this.$t('layout.header-aside.header-size.options.default'), value: 'default' },
        { label: this.$t('layout.header-aside.header-size.options.medium'), value: 'medium' },
        { label: this.$t('layout.header-aside.header-size.options.small'), value: 'small' },
        { label: this.$t('layout.header-aside.header-size.options.mini'), value: 'mini' }
      ]
    }
  },
  methods: {
    ...mapMutations({
      pageKeepAliveClean: 'vxadmin/page/keepAliveClean'
    }),
    ...mapActions({
      sizeSet: 'vxadmin/size/set'
    }),
    handleChange (value) {
      this.sizeSet(value)
      this.$notify({
        title: this.$t('public.notify.special.component-size.changed.title'),
        dangerouslyUseHTMLString: true,
        message: this.$t('public.notify.special.component-size.changed.message'),
        type: 'success'
      })
    },
    iconName (name) {
      return name === this.value ? 'dot-circle-o' : 'circle-o'
    }
  }
}
</script>
