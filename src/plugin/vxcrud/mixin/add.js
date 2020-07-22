import { forEach, cloneDeep } from 'lodash'

export default {
  methods: {
    /**
     * @description 新增行数据
     */
    handleAdd(templage = null) {
      this.formMode = 'add'
      this.$emit('dialog-open', {
        mode: 'add'
      })
      this.isDialogShow = true
      if (templage) {
        this.formData = cloneDeep(templage)
        this.addTemplateStorage = cloneDeep(templage)
      } else {
        this.formData = this.addTemplate ? cloneDeep(this.addTemplate) : {}
        this.addTemplateStorage = this.addTemplate ? cloneDeep(this.addTemplate) : {}
      }
      forEach(this.formData, (value, key) => {
        this.formData[key] = this.addTemplateStorage[key].value
      })
    }
  }
}
