

<template>
  <div class="wrap">
    <!-- 产品类型 -->
    <div class="pro-type">
      <div class="service-item" v-for="item in form.proTypeList" :key="item.id">
        <div class="service-img-wrap">
          <img class="service-img" :src="item.imgSrc" alt="imgSrc" />
        </div>
        <span>{{item.text}}</span>
      </div>
    </div>
    <!-- 查询条件 -->
    <div class="form-block">
      <ui-form ref="ruleForm" :model="form" label-width="100px">
        <ui-form-item label="业务类型">
          <div class="clear">
            <div class="float-left">
              <ui-popover placement="bottom" trigger="manual" v-model="serviceTypePopup">
                <div>
                  <div class="choose-service">
                    <p class="service-title">我的应用</p>
                    <div
                      class="service-item"
                      v-for="(item,index) in chooseServiceArr"
                      :key="item.id"
                      @click="subtractService(item,index)"
                    >
                      <div class="service-img-wrap">
                        <img class="service-img" :src="item.imgSrc" alt="imgSrc" />
                        <i class="ui-icon-circle-close icon-circle-close"></i>
                      </div>
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                  <div class="all-service">
                    <p class="service-title">全部应用</p>
                    <div
                      class="service-item"
                      v-for="(item,index) in allServiceArr"
                      :key="item.id"
                      @click="addService(item,index)"
                    >
                      <div class="service-img-wrap">
                        <img class="service-img" :src="item.imgSrc" alt="imgSrc" />
                        <i class="ui-icon-circle-check icon-circle-check" v-show="item.addActive"></i>
                      </div>
                      <span>{{item.text}}</span>
                    </div>
                  </div>
                  <div class="buttons">
                    <div class="button-item-active" @click="serviceTypePopup=!serviceTypePopup">
                      <span class="button-text">确认</span>
                    </div>
                    <div class="button-item" @click="serviceTypePopup=!serviceTypePopup">
                      <span class="button-text">取消</span>
                    </div>
                  </div>
                </div>
                <SelectItem
                  slot="reference"
                  selText="全部"
                  @hit="serviceTypePopup = !serviceTypePopup"
                ></SelectItem>
              </ui-popover>
            </div>
            <div class="float-left" v-for="item in chooseServiceArr" :key="item.id">
              <SelectItem
                :selText="item.text"
                :selActive="item.active"
                @hit="item.active=!item.active"
              ></SelectItem>
            </div>
          </div>
        </ui-form-item>
        <ui-form-item label="交易方向">
          <div class="clear">
            <div class="float-left" v-for="item in form.tradeDirecList" :key="item.label">
              <SelectItem
                :selText="item.value"
                :selActive="item.active"
                @hit="item.active=!item.active"
              ></SelectItem>
            </div>
          </div>
        </ui-form-item>
        <ui-form-item label="利率">
          <div class="clear">
            <ui-input placeholder="请输入内容"></ui-input>
            <span class="split-line"></span>
            <ui-input placeholder="请输入内容"></ui-input>
          </div>
        </ui-form-item>
        <ui-form-item label="期限">
          <div class="clear">
            <div class="float-left" v-for="item in form.expiresList" :key="item.label">
              <SelectItem
                :selText="item.value"
                :selActive="item.active"
                @hit="item.active=!item.active"
              ></SelectItem>
            </div>
          </div>
        </ui-form-item>
        <!-- 查询按钮 -->
        <ui-form-item>
          <div class="query-buttons">
            <ButtonItem
              text="查询"
              backgroundColor="#CE2848"
              marginRight="20px"
              @click.native="submitForm()"
            ></ButtonItem>
            <ButtonItem text="重置" backgroundColor="#BE9D62" @click.native="resetForm()"></ButtonItem>
          </div>
        </ui-form-item>
      </ui-form>
    </div>

    <!-- 查询结果 -->
    <div v-if="showTable">
      <ui-table :data="tableData" cell-class-name="tabel-cell">
        <ui-table-column prop="proType" label="产品类型" min-width="100px"></ui-table-column>
        <ui-table-column prop="serviceType" label="业务类型" min-width="200px"></ui-table-column>
        <ui-table-column prop="proName" label="产品名称" min-width="200px"></ui-table-column>
        <ui-table-column prop="organName" label="机构全称" min-width="200px"></ui-table-column>
        <ui-table-column label="利率" min-width="100px">
          <template slot-scope="scope">
            <span class="pro-rate">{{ scope.row.proRate }}</span>
          </template>
        </ui-table-column>
        <ui-table-column prop="proMoney" label="金额" min-width="200px"></ui-table-column>
        <ui-table-column prop="proExpires" label="期限" min-width="100px"></ui-table-column>
        <ui-table-column prop="publishDate" label="发布日期" min-width="100px"></ui-table-column>
        <ui-table-column label="操作">
          <template slot-scope="scope">
            <span class="detail-button" @click="goDetail(scope.row)">查看详情</span>
          </template>
        </ui-table-column>
      </ui-table>
      <div class="pagination-block">
        <ui-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout=" prev, pager, next, total"
          :total="1000"
        ></ui-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lineImg: require('@/assets/image/line.png'),
      form: {
        proType: '',
        proTypeList: [
          {
            id: '同业资金',
            text: '同业资金',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '债券业务',
            text: '债券业务',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '线上资金',
            text: '线上资金',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '同业投资',
            text: '同业投资',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '同业存单',
            text: '同业存单',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '票据业务',
            text: '票据业务',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '福费廷',
            text: '福费廷',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '闲钱参团',
            text: '闲钱参团',
            imgSrc: require('@/assets/image/logo.png'),
          },
          {
            id: '产品发布',
            text: '产品发布',
            imgSrc: require('@/assets/image/logo.png'),
          },
        ],
        serviceType: '',
        serviceTypeList: [
          {
            label: '同业存放',
            value: '同业存放',
            active: false,
          },
          {
            label: '协议存款',
            value: '协议存款',
            active: false,
          },
          {
            label: '同业借款',
            value: '同业借款',
            active: false,
          },
        ],
        tradeDirec: '',
        tradeDirecList: [
          {
            label: '全部',
            value: '全部',
            active: false,
          },
          {
            label: '买入',
            value: '买入',
            active: false,
          },
          {
            label: '卖出',
            value: '卖出',
            active: false,
          },
        ],
        minRate: '',
        maxRate: '',
        expires: '',
        expiresList: [
          {
            label: '全部',
            value: '全部',
            active: false,
          },
          {
            label: '30天以内',
            value: '30天以内',
            active: false,
          },
          {
            label: '30-90天',
            value: '30-90天',
            active: false,
          },
          {
            label: '91-180天',
            value: '91-180天',
            active: false,
          },
          {
            label: '181-360天',
            value: '181-360天',
            active: false,
          },
          {
            label: '一年以上',
            value: '一年以上',
            active: false,
          },
        ],
      },

      showTable: false,
      tableData: [
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
        {
          proType: '同业资金',
          serviceType: '同业存放',
          proName: '资金融入',
          organName: '江南农村商业银行',
          proRate: '4.55%',
          proMoney: '5,000W',
          proExpires: '360天',
          publishDate: '2020/09/10',
        },
      ],
      currentPage: 1,

      // 业务筛选弹出框
      serviceTypePopup: false,
      chooseServiceArr: [
        {
          id: 'choose同业存放',
          imgSrc: require('@/assets/image/logo.png'),
          text: '同业存放',
          active: false,
        },
        {
          id: 'choose协议存款',
          imgSrc: require('@/assets/image/logo.png'),
          text: '协议存款',
          active: false,
        },
        {
          id: 'choose同业借款',
          imgSrc: require('@/assets/image/logo.png'),
          text: '同业借款',
          active: false,
        },
      ],
      allServiceArr: [],
    }
  },
  methods: {
    addService(serviceItem, serviceIndex) {
      this.allServiceArr.splice(serviceIndex, 1)
      this.chooseServiceArr.push({
        id: serviceItem.text,
        imgSrc: require('@/assets/image/logo.png'),
        text: serviceItem.text,
      })
    },
    subtractService(serviceItem, serviceIndex) {
      this.chooseServiceArr.splice(serviceIndex, 1)
      this.allServiceArr.push({
        id: serviceItem.text,
        imgSrc: require('@/assets/image/logo.png'),
        text: serviceItem.text,
      })
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },
    goDetail(row) {
      this.$router.push({
        path: '/financialMarket/productIndex/ProDetail',
        query: {
          detail: JSON.stringify(row),
        },
      })
    },
    submitForm() {
      this.showTable = true
    },
    resetForm() {},
  },
}
</script>

<style lang="css" scoped>
.form-block {
  margin: 20px 0px;
}
/* 产品类型 */
.pro-type {
  height: 76px;
  background: #ffffff;
  margin-bottom: 14px;
  margin-top: 10px;
  padding: 0px 20px;
  box-sizing: border-box;
}
.service-item {
  display: inline-block;
  margin-right: 65px;
  margin-top: 15px;
}
.service-title {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}
.service-img-wrap {
  position: relative;
  text-align: center;
}
.service-img {
  width: 25px;
  height: 30px;
}

/* 查询/重置按钮 */
.query-buttons {
  margin: 20px 0px 0px;
}

.wrap /deep/ .ui-input {
  display: inline-block;
  width: 120px;
  margin-left: 10px;
}
.wrap /deep/ .ui-input__inner {
  width: 100%;
  height: 22px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(83, 83, 83, 1);
  border-radius: 11px;
}

/* 页码 */
.pagination-block {
  text-align: right;
  margin-top: 20px;
}
.pagination-block /deep/ .ui-pagination {
  display: inline-block;
}

/* 日期分割线 */
.split-line {
  display: inline-block;
  width: 17px;
  height: 1px;
  background: #3d3d3d;
  margin: 0 20px;
}

/* form表单 */
.wrap /deep/ .ui-form-item__label {
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
}

</style>
