
<template>
  <div class="credit-management">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>授信管理</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <ui-row>
      <ui-col>
        <div class="pro-info item">
          <div class="item-title">
            <p></p>
            <p>授信额度</p>
          </div>
        </div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col>
        <div v-for="item in proInfo" :key="item.itemTitle">
          <Item :itemTitle="item.itemTitle">
            <span>{{item.itemValue}}</span>
          </Item>
        </div>
      </ui-col>
    </ui-row>
    <!-- 圈内授信材料共享 -->
    <ui-row>
      <ui-col>
        <div class="pro-info item">
          <div class="item-title">
            <p></p>
            <p>圈内授信材料共享</p>
          </div>
        </div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col>
        <ui-table :data="materialsList" border style="width: 100%">
          <ui-table-column prop="index" label="序号" width="180"></ui-table-column>
          <ui-table-column prop="customerName" label="联盟圈名称"></ui-table-column>
          <ui-table-column prop="billDate" label="机构名称"></ui-table-column>
          <ui-table-column label="授信材料下载">
            <template slot-scope="scope">
              <ui-button type="text" size="small">下载</ui-button>
            </template>
          </ui-table-column>
        </ui-table>
      </ui-col>
    </ui-row>
    <!--授信申请 -->
    <ui-row>
      <ui-col>
        <div class="pro-info item">
          <div class="item-title">
            <p></p>
            <p>授信申请</p>
            <div class="arrow-right"></div>
          </div>
        </div>
      </ui-col>
    </ui-row>
    <ui-row>
      <ui-col :span="8" style="border:1px solid #eee;padding:10px 0;border-right:none">
        <div style="text-align:center">授信文件上传</div>
      </ui-col>
      <ui-col :span="12" style="border:1px solid #eee;padding:10px 0">
        <div style="text-align:center">授信材料.rar</div>
      </ui-col>
      <ui-col :span="4" style="padding:10px 0">
        <a href="javascript:;" style="margin:0 20px">上传</a>
        <a href="javascript:;">重新上传</a>
      </ui-col>
    </ui-row>
    <!-- <div class="files-upload">
          <div class="upload-content">
            <div">授信文件上传</div>
            <div>
              <span>授信材料.rar</span>
            </div>
          </div>
          <p class="upload">
            <a href="javascript:;">上传</a>
            <a href="javascript:;">重新上传</a>
          </p>
    </div>-->
    <!-- 按钮 -->
    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">提交</ui-button>
    </div>
  </div>
</template>


<script>
import Item from '@/views/member/components/Item.vue'
export default {
  name: 'creditManagement',
  components: {
    Item,
  },
  data() {
    return {
      proInfo: [
        {
          itemTitle: '授信测算额度',
          itemValue: '50',
        },
        {
          itemTitle: '授信期限',
          itemValue: '36',
        },
        {
          itemTitle: '金融市场部业务额度（亿元）',
          itemValue: '5',
        },
        {
          itemTitle: '零售业务部业务额度（亿元）',
          itemValue: '5',
        },
      ],
      // 材料共享
      materialsList: [
        {
          index: 1,
          customerName: '刘诗诗',
          billDate: '13148888888',
          checkingFiles: '你好嘛',
        },
        {
          index: 2,
          customerName: '朱一龙',
          billDate: '13148888888',
          checkingFiles: '可好啦',
        },
        {
          index: 3,
          customerName: '郑好',
          billDate: '13148888888',
          checkingFiles: '长歌',
        },
      ],
    }
  },
  methods: {
    submitForm(form) {
      this.$router.push('/member/creditRes')
    },
  },
}
</script>

<style lang="scss" scoped>
.credit-management {
  .item-title {
    overflow: hidden;
  }
  .item-title p {
    float: left;
    line-height: 30px;
  }
  .item-title p:nth-child(1) {
    width: 10px;
    height: 30px;
    background: #f0f;
    margin-right: 20px;
  }
  .arrow-right {
    width: 20px;
    height: 20px;
    float: right;
    margin-top: 20px;
    background: #f0f;
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
    // width: 20%;
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
    border-radius: 20px;
    background: #ce2848;
    border-color: #ce2848;
    padding: 12px 20px !important;
  }
}
</style>