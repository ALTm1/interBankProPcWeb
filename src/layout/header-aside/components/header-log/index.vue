<template>
  <ui-tooltip effect="dark" :content="tooltipContent" placement="bottom">
    <ui-button class="ui-ml-0 ui-mr btn-text can-hover" type="text" @click="handleClick">
      <ui-badge
        v-if="logLength > 0"
        :max="99"
        :value="logLengthError"
        :is-dot="logLengthError === 0"
      >
        <ui-icon-fa :name="logLengthError === 0 ? 'dot-circle-o' : 'bug'" style="font-size: 20px" />
      </ui-badge>
      <ui-icon-fa v-else name="dot-circle-o" style="font-size: 20px" />
    </ui-button>
  </ui-tooltip>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapGetters('vxadmin', {
      logLength: 'log/length',
      logLengthError: 'log/lengthError'
    }),
    tooltipContent() {
      return this.logLength === 0
        ? this.$t('layout.header-aside.header-log.empty')
        : `${this.$t('layout.header-aside.header-log.log-length', {
          length: this.logLength
        })}${
          this.logLengthError > 0
            ? ` | ${this.$t('layout.header-aside.header-log.error-length', {
              length: this.logLengthError
            })}`
            : ''
        }`
    }
  },
  methods: {
    ...mapMutations('vxadmin/log', ['clean']),
    handleClick() {
      this.$router.push({
        name: 'log'
      })
    }
  }
}
</script>
