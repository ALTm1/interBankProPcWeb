<template>
  <div>
    <ui-tooltip
      effect="dark"
      placement="bottom"
      :content="$t('layout.header-aside.header-theme.tooltip.content')"
    >
      <ui-button class="ui-ml-0 ui-mr btn-text can-hover" type="text" @click="dialogVisible = true">
        <ui-icon-fa name="diamond" style="font-size: 16px" />
      </ui-button>
    </ui-tooltip>
    <ui-dialog
      width="600px"
      :title="$t('layout.header-aside.header-theme.dialog.title')"
      :visible.sync="dialogVisible"
      :append-to-body="true"
    >
      <ui-theme-list style="margin-top: -25px;" />
    </ui-dialog>
  </div>
</template>

<script>
import themeList from './components/vx-theme-list'

export default {
  components: {
    'ui-theme-list': themeList
  },
  data() {
    return {
      dialogVisible: false
    }
  }
}
</script>
