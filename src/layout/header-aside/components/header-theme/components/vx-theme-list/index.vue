<template>
  <ui-table
    :data="list"
    v-bind="table">
    <ui-table-column
      prop="title"
      align="center"
      width="160"/>
    <ui-table-column
      width="120"
      :label="$t('layout.header-aside.header-theme.list.column.label.preview')">
      <div
        slot-scope="scope"
        class="theme-preview"
        :style="{
          backgroundImage: `url(${$baseUrl}${scope.row.preview})`
        }">
      </div>
    </ui-table-column>
    <ui-table-column
      prop="address"
      align="center">
      <template slot-scope="scope">
        <ui-button
          v-if="activeName === scope.row.name"
          type="success"
          icon="ui-icon-check"
          round>
          {{ $t('layout.header-aside.header-theme.list.button.is-active') }}
        </ui-button>
        <ui-button
          v-else
          round
          @click="handleSelectTheme(scope.row.name)">
          {{ $t('layout.header-aside.header-theme.list.button.select') }}
        </ui-button>
      </template>
    </ui-table-column>
  </ui-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'ui-theme-list',
  data () {
    return {
      table: {
        showHeader: false,
        border: true
      }
    }
  },
  computed: {
    ...mapState('vxadmin/theme', [
      'list',
      'activeName'
    ])
  },
  methods: {
    ...mapActions('vxadmin/theme', [
      'set'
    ]),
    handleSelectTheme (name) {
      this.set(name)
    }
  }
}
</script>

<style lang="scss" scoped>
.theme-preview {
  height: 50px;
  width: 100px;
  border-radius: 4px;
  background-size: cover;
  border: 1px solid $color-border-1;
}
</style>
