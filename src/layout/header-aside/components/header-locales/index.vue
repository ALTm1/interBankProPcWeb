<template>
  <ui-dropdown placement="bottom" size="small" @command="command => $i18n.locale = command">
    <ui-button class="ui-mr btn-text can-hover" type="text">
      <ui-icon-fa name="language" style="font-size: 16px;" />
    </ui-button>
    <ui-dropdown-menu slot="dropdown">
      <ui-dropdown-item
        v-for="(language, index) in $languages"
        :key="index"
        :command="language.value"
      >
        <ui-icon-fa
          :name="$i18n.locale === language.value ? 'dot-circle-o' : 'circle-o'"
          class="ui-mr-5"
        />
        {{ language.label }}
      </ui-dropdown-item>
    </ui-dropdown-menu>
  </ui-dropdown>
</template>
