<template>
  <ui-dropdown size="small" class="ui-mr">
    <span class="btn-text">{{info.name ? `${$t('layout.header-aside.header-user.hello')} ${info.name}` : '----'}}</span>
    <ui-dropdown-menu slot="dropdown">
      <ui-dropdown-item @click.native="logOff">
        <ui-icon-fa name="power-off" class="ui-mr-5"/>
        {{ $t('layout.header-aside.header-user.log-off') }}
      </ui-dropdown-item>
    </ui-dropdown-menu>
  </ui-dropdown>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('vxadmin/user', [
      'info'
    ])
  },
  methods: {
    ...mapActions('vxadmin/account', [
      'logout'
    ]),
    /**
     * @description 登出
     */
    logOff () {
      this.logout({
        confirm: true
      })
    }
  }
}
</script>
