<template>
  <div
    class="ui-crud"
    v-loading="loading"
    :element-loading-text="loadingOptions ? handleAttribute(loadingOptions.text, null) : null"
    :element-loading-spinner="loadingOptions ? handleAttribute(loadingOptions.spinner, null) : null"
    :element-loading-background="loadingOptions ? handleAttribute(loadingOptions.background, null) : null"
  >
    <div class="ui-crud-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ui-crud-body">
      <ui-table
        ref="elTable"
        :data="uiCrudData"
        v-bind="options"
        @current-change="handleCurrentChange"
        @select="handleSelect"
        @select-all="handleSelectAll"
        @selection-change="handleSelectionChange"
        @sort-change="handleSortChange"
        @cell-mouse-enter="handleCellMouseEnter"
        @cell-mouse-leave="handleCellMouseLeave"
        @cell-click="handleCellClick"
        @cell-dblclick="handleCellDblclick"
        @row-click="handleRowClick"
        @row-contextmenu="handleRowContextmenu"
        @row-dblclick="handleRowDblclick"
        @header-click="handleHeaderClick"
        @header-contextmenu="handleHeaderContextmenu"
      >
        <ui-table-column
          v-if="selectionRow || selectionRow === ''"
          type="selection"
          :label="handleAttribute(selectionRow.title, '')"
          v-bind="selectionRow"
        ></ui-table-column>
        <ui-table-column
          v-if="indexRow || indexRow === ''"
          type="index"
          :label="handleAttribute(indexRow.title, '')"
          v-bind="indexRow"
        ></ui-table-column>
        <ui-table-column
          v-for="(item, index) in columns"
          :key="index"
          :label="handleAttribute(item.title, '')"
          :prop="handleAttribute(item.key, null)"
          v-bind="item"
        >
          <template slot-scope="scope">
            <ui-input
              v-if="item.component && item.component.name === 'ui-input'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-input>
            <ui-input-number
              v-else-if="item.component && item.component.name === 'ui-input-number'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-input-number>
            <ui-radio-group
              v-else-if="item.component && item.component.name === 'ui-radio'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            >
              <template v-if="item.component.buttonMode">
                <ui-radio-button
                  v-for="option in item.component.options"
                  :key="option.value"
                  :label="option.value"
                >{{option.label}}</ui-radio-button>
              </template>
              <template v-else>
                <ui-radio
                  v-for="option in item.component.options"
                  :key="option.value"
                  :label="option.value"
                >{{option.label}}</ui-radio>
              </template>
            </ui-radio-group>
            <ui-checkbox-group
              v-else-if="item.component && item.component.name === 'ui-checkbox'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            >
              <template v-if="item.component.buttonMode">
                <ui-checkbox-button
                  v-for="option in item.component.options"
                  :key="option.value"
                  :label="option.value"
                >{{option.label}}</ui-checkbox-button>
              </template>
              <template v-else>
                <ui-checkbox
                  v-for="option in item.component.options"
                  :key="option.value"
                  :label="option.value"
                >{{option.label}}</ui-checkbox>
              </template>
            </ui-checkbox-group>
            <ui-select
              v-else-if="item.component && item.component.name === 'ui-select'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            >
              <ui-option
                v-for="option in item.component.options"
                :key="option.value"
                v-bind="option"
              ></ui-option>
            </ui-select>
            <ui-cascader
              v-else-if="item.component && item.component.name === 'ui-cascader'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-cascader>
            <ui-switch
              v-else-if="item.component && item.component.name === 'ui-switch'"
              v-model="scope.row[item.key]"
              v-bind="item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-switch>
            <ui-slider
              v-else-if="item.component && item.component.name === 'ui-slider'"
              v-model="scope.row[item.key]"
              v-bind="item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-slider>
            <ui-time-select
              v-else-if="item.component && item.component.name === 'ui-time-select'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-time-select>
            <ui-time-picker
              v-else-if="item.component && item.component.name === 'ui-time-picker'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-time-picker>
            <ui-date-picker
              v-else-if="item.component && item.component.name === 'ui-date-picker'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-date-picker>
            <ui-rate
              v-else-if="item.component && item.component.name === 'ui-rate'"
              v-model="scope.row[item.key]"
              v-bind="item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-rate>
            <ui-color-picker
              v-else-if="item.component && item.component.name === 'ui-color-picker'"
              v-model="scope.row[item.key]"
              v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item.component) : item.component"
              @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item.key, value: scope.row[item.key], row: scope.row})"
            ></ui-color-picker>
            <render-custom-component
              v-else-if="item.component && item.component.name"
              v-model="scope.row[item.key]"
              :component-name="item.component.name"
              :props="item.component.props ? item.component.props : null"
              :scope="scope"
            ></render-custom-component>
            <render-component
              v-else-if="item.component && item.component.render"
              :render-function="item.component.render"
              :scope="scope"
            ></render-component>
            <template
              v-else
            >{{item.formatter ? item.formatter(scope.row, scope.column, _get(scope.row, item.key), scope.$index) : _get(scope.row, item.key)}}</template>
          </template>
          <template v-if="item.children">
            <ui-table-column
              v-for="(item2, index2) in item.children"
              :key="index2"
              :label="handleAttribute(item2.title, '')"
              :prop="handleAttribute(item2.key, null)"
              v-bind="item2"
            >
              <template slot-scope="scope">
                <ui-input
                  v-if="item2.component && item2.component.name === 'ui-input'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-input>
                <ui-input-number
                  v-else-if="item2.component && item2.component.name === 'ui-input-number'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-input-number>
                <ui-radio-group
                  v-else-if="item2.component && item2.component.name === 'ui-radio'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                >
                  <template v-if="item2.component.buttonMode">
                    <ui-radio-button
                      v-for="option in item2.component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-radio-button>
                  </template>
                  <template v-else>
                    <ui-radio
                      v-for="option in item2.component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-radio>
                  </template>
                </ui-radio-group>
                <ui-checkbox-group
                  v-else-if="item2.component && item2.component.name === 'ui-checkbox'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                >
                  <template v-if="item2.component.buttonMode">
                    <ui-checkbox-button
                      v-for="option in item2.component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-checkbox-button>
                  </template>
                  <template v-else>
                    <ui-checkbox
                      v-for="option in item2.component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-checkbox>
                  </template>
                </ui-checkbox-group>
                <ui-select
                  v-else-if="item2.component && item2.component.name === 'ui-select'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                >
                  <ui-option
                    v-for="option in item2.component.options"
                    :key="option.value"
                    v-bind="option"
                  ></ui-option>
                </ui-select>
                <ui-cascader
                  v-else-if="item2.component && item2.component.name === 'ui-cascader'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-cascader>
                <ui-switch
                  v-else-if="item2.component && item2.component.name === 'ui-switch'"
                  v-model="scope.row[item2.key]"
                  v-bind="item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-switch>
                <ui-slider
                  v-else-if="item2.component && item2.component.name === 'ui-slider'"
                  v-model="scope.row[item2.key]"
                  v-bind="item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-slider>
                <ui-time-select
                  v-else-if="item2.component && item2.component.name === 'ui-time-select'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-time-select>
                <ui-time-picker
                  v-else-if="item2.component && item2.component.name === 'ui-time-picker'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-time-picker>
                <ui-date-picker
                  v-else-if="item2.component && item2.component.name === 'ui-date-picker'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-date-picker>
                <ui-rate
                  v-else-if="item2.component && item2.component.name === 'ui-rate'"
                  v-model="scope.row[item2.key]"
                  v-bind="item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-rate>
                <ui-color-picker
                  v-else-if="item2.component && item2.component.name === 'ui-color-picker'"
                  v-model="scope.row[item2.key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item2.component) : item2.component"
                  @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item2.key, value: scope.row[item2.key], row: scope.row})"
                ></ui-color-picker>
                <render-custom-component
                  v-else-if="item2.component && item2.component.name"
                  v-model="scope.row[item2.key]"
                  :component-name="item2.component.name"
                  :props="item2.component.props ? item2.component.props : null"
                  :scope="scope"
                ></render-custom-component>
                <render-component
                  v-else-if="item2.component && item2.component.render"
                  :render-function="item2.component.render"
                  :scope="scope"
                ></render-component>
                <template
                  v-else
                >{{item2.formatter ? item2.formatter(scope.row, scope.column, _get(scope.row, item2.key), scope.$index) : _get(scope.row, item2.key)}}</template>
              </template>
              <template v-if="item2.children">
                <ui-table-column
                  v-for="(item3, index3) in item2.children"
                  :key="index3"
                  :label="handleAttribute(item3.title, '')"
                  :prop="handleAttribute(item3.key, null)"
                  v-bind="item3"
                >
                  <template slot-scope="scope">
                    <ui-input
                      v-if="item3.component && item3.component.name === 'ui-input'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-input>
                    <ui-input-number
                      v-else-if="item3.component && item3.component.name === 'ui-input-number'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-input-number>
                    <ui-radio-group
                      v-else-if="item3.component && item3.component.name === 'ui-radio'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    >
                      <template v-if="item3.component.buttonMode">
                        <ui-radio-button
                          v-for="option in item3.component.options"
                          :key="option.value"
                          :label="option.value"
                        >{{option.label}}</ui-radio-button>
                      </template>
                      <template v-else>
                        <ui-radio
                          v-for="option in item3.component.options"
                          :key="option.value"
                          :label="option.value"
                        >{{option.label}}</ui-radio>
                      </template>
                    </ui-radio-group>
                    <ui-checkbox-group
                      v-else-if="item3.component && item3.component.name === 'ui-checkbox'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    >
                      <template v-if="item3.component.buttonMode">
                        <ui-checkbox-button
                          v-for="option in item3.component.options"
                          :key="option.value"
                          :label="option.value"
                        >{{option.label}}</ui-checkbox-button>
                      </template>
                      <template v-else>
                        <ui-checkbox
                          v-for="option in item3.component.options"
                          :key="option.value"
                          :label="option.value"
                        >{{option.label}}</ui-checkbox>
                      </template>
                    </ui-checkbox-group>
                    <ui-select
                      v-else-if="item3.component && item3.component.name === 'ui-select'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    >
                      <ui-option
                        v-for="option in item3.component.options"
                        :key="option.value"
                        v-bind="option"
                      ></ui-option>
                    </ui-select>
                    <ui-cascader
                      v-else-if="item3.component && item3.component.name === 'ui-cascader'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-cascader>
                    <ui-switch
                      v-else-if="item3.component && item3.component.name === 'ui-switch'"
                      v-model="scope.row[item3.key]"
                      v-bind="item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-switch>
                    <ui-slider
                      v-else-if="item3.component && item3.component.name === 'ui-slider'"
                      v-model="scope.row[item3.key]"
                      v-bind="item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-slider>
                    <ui-time-select
                      v-else-if="item3.component && item3.component.name === 'ui-time-select'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-time-select>
                    <ui-time-picker
                      v-else-if="item3.component && item3.component.name === 'ui-time-picker'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-time-picker>
                    <ui-date-picker
                      v-else-if="item3.component && item3.component.name === 'ui-date-picker'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-date-picker>
                    <ui-rate
                      v-else-if="item3.component && item3.component.name === 'ui-rate'"
                      v-model="scope.row[item3.key]"
                      v-bind="item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-rate>
                    <ui-color-picker
                      v-else-if="item3.component && item3.component.name === 'ui-color-picker'"
                      v-model="scope.row[item3.key]"
                      v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item3.component) : item3.component"
                      @change="$emit('cell-data-change', {rowIndex: scope.$index, key: item3.key, value: scope.row[item3.key], row: scope.row})"
                    ></ui-color-picker>
                    <render-custom-component
                      v-else-if="item3.component && item3.component.name"
                      v-model="scope.row[item3.key]"
                      :component-name="item3.component.name"
                      :props="item3.component.props ? item3.component.props : null"
                      :scope="scope"
                    ></render-custom-component>
                    <render-component
                      v-else-if="item3.component && item3.component.render"
                      :render-function="item3.component.render"
                      :scope="scope"
                    ></render-component>
                    <template
                      v-else
                    >{{item3.formatter ? item3.formatter(scope.row, scope.column, _get(scope.row, item3.key), scope.$index) : _get(scope.row, item3.key)}}</template>
                  </template>
                </ui-table-column>
              </template>
            </ui-table-column>
          </template>
        </ui-table-column>
        <ui-table-column
          v-if="rowHandle"
          :label="handleAttribute(rowHandle.columnHeader, '操作')"
          v-bind="rowHandle"
        >
          <template slot-scope="scope">
            <template>
              <ui-button
                v-if="rowHandle.edit && rowHandle.edit.circle && handleRowHandleButtonShow(rowHandle.edit.show, scope.$index, scope.row)"
                :disabled="handleRowHandleButtonDisabled(rowHandle.edit.disabled, scope.$index, scope.row)"
                v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, rowHandle.edit) : rowHandle.edit"
                @click="handleEdit(scope.$index, scope.row)"
              ></ui-button>
              <ui-button
                v-if="rowHandle.edit && !rowHandle.edit.circle && handleRowHandleButtonShow(rowHandle.edit.show, scope.$index, scope.row)"
                :disabled="handleRowHandleButtonDisabled(rowHandle.edit.disabled, scope.$index, scope.row)"
                v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, rowHandle.edit) : rowHandle.edit"
                @click="handleEdit(scope.$index, scope.row)"
              >{{handleAttribute(rowHandle.edit.text, '编辑')}}</ui-button>
            </template>
            <template>
              <ui-button
                v-if="rowHandle.remove && rowHandle.remove.circle && handleRowHandleButtonShow(rowHandle.remove.show, scope.$index, scope.row)"
                :type="handleAttribute(rowHandle.remove.type, 'danger')"
                :disabled="handleRowHandleButtonDisabled(rowHandle.remove.disabled, scope.$index, scope.row)"
                v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, rowHandle.remove) : rowHandle.remove"
                @click="handleRemove(scope.$index, scope.row)"
              ></ui-button>
              <ui-button
                v-if="rowHandle.remove && !rowHandle.remove.circle && handleRowHandleButtonShow(rowHandle.remove.show, scope.$index, scope.row)"
                :type="handleAttribute(rowHandle.remove.type, 'danger')"
                :disabled="handleRowHandleButtonDisabled(rowHandle.remove.disabled, scope.$index, scope.row)"
                v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, rowHandle.remove) : rowHandle.remove"
                @click="handleRemove(scope.$index, scope.row)"
              >{{handleAttribute(rowHandle.remove.text, '删除')}}</ui-button>
            </template>
            <template v-for="(item, index) in handleAttribute(rowHandle.custom, [])">
              <template>
                <ui-button
                  :key="index"
                  v-if="item.circle && handleRowHandleButtonShow(item.show, scope.$index, scope.row)"
                  :disabled="handleRowHandleButtonDisabled(item.disabled, scope.$index, scope.row)"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item) : item"
                  @click="$emit(item.emit, {index: scope.$index, row: scope.row})"
                ></ui-button>
                <ui-button
                  :key="index"
                  v-if="!item.circle && handleRowHandleButtonShow(item.show, scope.$index, scope.row)"
                  :disabled="handleRowHandleButtonDisabled(item.disabled, scope.$index, scope.row)"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, item) : item"
                  @click="$emit(item.emit, {index: scope.$index, row: scope.row})"
                >{{item.text}}</ui-button>
              </template>
            </template>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <div class="ui-crud-pagination" v-if="pagination">
      <ui-pagination
        v-bind="pagination"
        @size-change="handlePaginationSizeChange"
        @current-change="handlePaginationCurrentChange"
        @prev-click="handlePaginationPrevClick"
        @next-click="handlePaginationNextClick"
      ></ui-pagination>
    </div>
    <ui-dialog
      v-if="isDialogShow"
      :title="formMode === 'edit' ? editTitle : addTitle"
      :visible.sync="isDialogShow"
      :before-close="handleDialogCancel"
      v-bind="formOptions"
    >
      <ui-form ref="form" :model="formData" :rules="handleFormRulesMode()" v-bind="formOptions">
        <ui-row v-bind="formOptions">
          <template v-for="(value, key, index) in formData">
            <ui-col
              :key="index"
              v-if="handleFormTemplateMode(key).component ? handleAttribute(handleFormTemplateMode(key).component.show, true) : true"
              :span="handleFormTemplateMode(key).component ? handleAttribute(handleFormTemplateMode(key).component.span, 24) : 24"
              :offset="handleFormTemplateMode(key).component ? handleAttribute(handleFormTemplateMode(key).component.offset, 0) : 0"
            >
              <ui-form-item :label="handleFormTemplateMode(key).title" :prop="key">
                <ui-input
                  v-if="(!handleFormTemplateMode(key).component) ||((!handleFormTemplateMode(key).component.name) && (!handleFormTemplateMode(key).component.render)) || handleFormTemplateMode(key).component.name === 'ui-input'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-input>
                <ui-input-number
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-input-number'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-input-number>
                <ui-radio-group
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-radio'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                >
                  <template v-if="handleFormTemplateMode(key).component.buttonMode">
                    <ui-radio-button
                      v-for="option in handleFormTemplateMode(key).component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-radio-button>
                  </template>
                  <template v-else>
                    <ui-radio
                      v-for="option in handleFormTemplateMode(key).component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-radio>
                  </template>
                </ui-radio-group>
                <ui-checkbox-group
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-checkbox'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                >
                  <template v-if="handleFormTemplateMode(key).component.buttonMode">
                    <ui-checkbox-button
                      v-for="option in handleFormTemplateMode(key).component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-checkbox-button>
                  </template>
                  <template v-else>
                    <ui-checkbox
                      v-for="option in handleFormTemplateMode(key).component.options"
                      :key="option.value"
                      :label="option.value"
                    >{{option.label}}</ui-checkbox>
                  </template>
                </ui-checkbox-group>
                <ui-select
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-select'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                >
                  <ui-option
                    v-for="option in handleFormTemplateMode(key).component.options"
                    :key="option.value"
                    v-bind="option"
                  ></ui-option>
                </ui-select>
                <ui-cascader
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-cascader'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-cascader>
                <ui-switch
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-switch'"
                  v-model="formData[key]"
                  v-bind="handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-switch>
                <ui-slider
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-slider'"
                  v-model="formData[key]"
                  v-bind="handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-slider>
                <ui-time-select
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-time-select'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-time-select>
                <ui-time-picker
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-time-picker'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-time-picker>
                <ui-date-picker
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-date-picker'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-date-picker>
                <ui-rate
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-rate'"
                  v-model="formData[key]"
                  v-bind="handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-rate>
                <ui-color-picker
                  v-else-if="handleFormTemplateMode(key).component.name === 'ui-color-picker'"
                  v-model="formData[key]"
                  v-bind="$uiCrudSize ? Object.assign({ size: $uiCrudSize}, handleFormTemplateMode(key).component) : handleFormTemplateMode(key).component"
                  @change="$emit('form-data-change', {key: key, value: value})"
                ></ui-color-picker>
                <render-custom-component
                  v-else-if="handleFormTemplateMode(key).component.name"
                  v-model="formData[key]"
                  :component-name="handleFormTemplateMode(key).component.name"
                  :props="handleFormTemplateMode(key).component.props ? handleFormTemplateMode(key).component.props : null"
                ></render-custom-component>
                <render-component
                  v-else-if="handleFormTemplateMode(key).component.render"
                  :render-function="handleFormTemplateMode(key).component.render"
                  :scope="formData[key]"
                ></render-component>
              </ui-form-item>
            </ui-col>
          </template>
        </ui-row>
      </ui-form>
      <div slot="footer">
        <ui-button
          :size="formOptions ? handleAttribute(formOptions.saveButtonSize, null) : null"
          :type="formOptions ? handleAttribute(formOptions.saveButtonType, null) : null"
          :icon="formOptions ? handleAttribute(formOptions.saveButtonIcon, null) : null"
          :loading="formOptions ? handleAttribute(formOptions.saveLoading, false) : false"
          @click="handleDialogSave"
        >{{formOptions ? handleAttribute(formOptions.saveButtonText, '确定') : '确定'}}</ui-button>
      </div>
    </ui-dialog>
  </div>
</template>

<script>
import base from './mixin/base'
import handleRow from './mixin/handleRow'
import data from './mixin/data'
import edit from './mixin/edit'
import add from './mixin/add'
import remove from './mixin/remove'
import dialog from './mixin/dialog'
import pagination from './mixin/pagination'
import exposeMethods from './mixin/exposeMethods.js'
import utils from './mixin/utils'
import renderComponent from './components/renderComponent.vue'
import renderCustomComponent from './components/renderCustomComponent.vue'

export default {
  name: 'ui-crud',
  mixins: [
    base,
    data,
    handleRow,
    edit,
    add,
    remove,
    dialog,
    pagination,
    exposeMethods,
    utils
  ],
  components: {
    renderComponent,
    renderCustomComponent
    // uiColumn
  }
}
</script>

<style lang="scss" scoped>
.ui-crud {
  .ui-crud-header {
    border-bottom: 1px dotted rgba(0, 0, 0, 0.2);
  }
  .ui-crud-body {
    padding: 15px 0;
    overflow: hidden;
  }
  .ui-crud-pagination {
    padding: 15px 0;
  }
}
</style>
