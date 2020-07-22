<!--
 * @Author: your name
 * @Date: 2020-07-20 09:36:24
 * @LastEditTime: 2020-07-20 15:02:04
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JNRCB-PC\src\views\financialmarket\ProRelease.vue
--> 

<template>
  <div class="pro-release">
    <ui-form ref="form" :model="form" label-width="100px">
      <ui-form-item label="产品类型">
        <ui-select v-model="form.proType" placeholder="请选择">
          <ui-option label="同业存放" value="选项一"></ui-option>
          <ui-option label="协议存款" value="选项二"></ui-option>
          <ui-option label="同业借款" value="选项三"></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="产品名称">
        <ui-input v-model="form.proName"></ui-input>
      </ui-form-item>
      <ui-form-item label="交易方向">
        <ui-select v-model="form.tradeDirection" placeholder="请选择">
          <ui-option label="买入" value="买入"></ui-option>
          <ui-option label="卖出" value="卖出"></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="产品标签">
        <ui-checkbox-group v-model="form.proTagList">
          <ui-checkbox label="高风险" name="type"></ui-checkbox>
          <ui-checkbox label="低风险" name="type"></ui-checkbox>
          <ui-checkbox label="高收益" name="type"></ui-checkbox>
        </ui-checkbox-group>
      </ui-form-item>
      <ui-form-item label="金额">
        <ui-input v-model="form.proMoney" style="width: 90%;"></ui-input>
        <span slot>万元</span>
      </ui-form-item>
      <ui-form-item label="利率">
        <ui-input v-model="form.proRate" style="width: 90%;"></ui-input>
        <span slot>%</span>
      </ui-form-item>
      <ui-form-item label="期限">
        <ui-input v-model="form.proExpires" style="width: 90%;"></ui-input>
        <span slot>天</span>
      </ui-form-item>
      <ui-form-item label="备注">
        <ui-input type="textarea" v-model="form.proDesc"></ui-input>
      </ui-form-item>
      <ui-form-item label="联系人列表">
        <ui-select v-model="form.contactPeople" placeholder="请选择联系人" multiple>
          <ui-option
            v-for="item in contactPeopleList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item label="属性类型">
        <ui-radio v-model="form.attrTypeRadio" label="1">全部可见</ui-radio>
        <ui-radio v-model="form.attrTypeRadio" label="2">指定交易对手</ui-radio>
        <ui-radio v-model="form.attrTypeRadio" label="3">指定好友</ui-radio>
      </ui-form-item>
      <ui-form-item label="机构列表">
        <ui-select v-model="form.organization" placeholder="请选择机构">
          <ui-option
            v-for="item in organList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></ui-option>
        </ui-select>
      </ui-form-item>
      <ui-form-item>
        <ui-button type="primary" @click="onSubmit">提交</ui-button>
      </ui-form-item>
    </ui-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        proType: '',
        proName: '',
        proMoney: '',
        attrTypeRadio: '',
        tradeDirection: '',
        proTagList: [],
        proRate: '',
        proExpires: '',
        proDesc: '',
        organization: '',
        contactPeople: []
      },
      organList: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      contactPeopleList: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  },
  methods: {
    onSubmit() {
      this.$router.push({
        path: '/proReleaseSucc'
      })
    }
  }
}
</script>

<style lang="css" scoped>
.pro-release /deep/ .ui-form {
  width: 80%;
}
</style>
