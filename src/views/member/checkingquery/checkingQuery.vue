 


<template>
  <div class="checking-query">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>对账查询</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <!-- 查询 -->
    <div class="mounth-bill">
      <div class="bill">
        <div class="title">月账单</div>
        <div class="bill-title">
          <ui-select v-model="bill" placeholder="请选择">
            <ui-option
              v-for="item in billOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></ui-option>
          </ui-select>
        </div>
      </div>

      <div class="btn">
        <ui-button type="primary" @click="queryBill">查询</ui-button>
      </div>
    </div>
    <!-- 表格 -->
    <div style="margin: 40px 0">
      <ui-table :data="checkingList" border style="width: 100%">
        <ui-table-column prop="index" label="对账编号" width="180"></ui-table-column>
        <ui-table-column prop="customerName" label="客户名称"></ui-table-column>
        <ui-table-column prop="billDate" label="账单日"></ui-table-column>
        <ui-table-column prop="checkingFiles" label="对账文件"></ui-table-column>
        <ui-table-column prop="checkingFiles" label="对账状态"></ui-table-column>
        <ui-table-column prop="checkingFiles" label="操作">
          <template slot-scope="scope">
            <ui-button type="text" size="small">下载</ui-button>
          </template>
        </ui-table-column>
      </ui-table>
    </div>
    <!-- 按钮 -->
    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">提交</ui-button>
    </div>
  </div>
</template>


<script>
import Item from '@/views/member/components/Item.vue'
export default {
  name: 'checkingQuery',
  components: {
    Item
  },
  data() {
    return {
      proInfo: [
        {
          itemTitle: '授信测算额度',
          itemValue: '50'
        },
        {
          itemTitle: '授信期限',
          itemValue: '36'
        },
        {
          itemTitle: '金融市场部业务额度（亿元）',
          itemValue: '5'
        },
        {
          itemTitle: '零售业务部业务额度（亿元）',
          itemValue: '5'
        }
      ],
      //   月账单
      bill: '',
      billOptions: [
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
      // 对账数据
      checkingList: [
        {
          index: 1,
          customerName: '刘诗诗',
          billDate: '13148888888',
          checkingFiles: '你好嘛'
        },
        {
          index: 2,
          customerName: '朱一龙',
          billDate: '13148888888',
          checkingFiles: '可好啦'
        },
        {
          index: 3,
          customerName: '郑好',
          billDate: '13148888888',
          checkingFiles: '长歌'
        }
      ]
    }
  },
  methods: {
    queryBill() {
      console.log(1)
    },
    submitForm(form) {
      this.$router.push('/member/checkingFilesUpload')
    }
  }
}
</script>

<style lang="scss" scoped>
.checking-query {
  .bill {
    width: 40%;
    margin: 80px auto;
    overflow: hidden;
  }
  .title {
    margin-right: 20px;
    line-height: 40px;
  }
  .title,
  .bill-title {
    float: left;
  }
  .files-upload {
    overflow: hidden;
  }
  .upload-content div {
    padding: 10px 0;
    overflow: hidden;
    border: 1px solid #eee;
  }
  .upload-content div {
    float: left;
    text-align: center;
  }
  .upload-content div:nth-child(1) {
    width: 20%;
    border-right: 1px solid #eee;
  }
  .upload-content div:nth-child(2) {
    width: 60%;
  }
  .upload {
    overflow: hidden;
  }
  .upload a {
    color: #409eff;
    text-decoration: underline;
  }
  .upload a:nth-child(1) {
    margin: 0 20px;
  }
  .btn {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
  .btn .ui-button {
    width: 30%;
    padding: 12px 20px !important;
  }
}
</style>