

<template>
  <div class="pro-query">
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
    <div>
      <!-- 业务类型 -->
      <div class="clear sel-item">
        <div class="float-left sel-title">业务类型</div>
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
            <SelectItem slot="reference" selText="全部" @hit="serviceTypePopup = !serviceTypePopup"></SelectItem>
          </ui-popover>
        </div>
        <div class="float-left" v-for="item in chooseServiceArr" :key="item.id">
          <SelectItem :selText="item.text" :selActive="item.active" @hit="item.active=!item.active"></SelectItem>
        </div>
      </div>
      <!-- 交易方向 -->
      <div class="clear sel-item">
        <div class="float-left sel-title">交易方向</div>
        <div class="float-left" v-for="item in form.tradeDirecList" :key="item.label">
          <SelectItem
            :selText="item.value"
            :selActive="item.active"
            @hit="item.active=!item.active"
          ></SelectItem>
        </div>
      </div>
      <!-- 利率 -->
      <div class="clear sel-item">
        <div class="float-left sel-title">利率</div>
        <input class="input-item" type="text" placeholder="请输入" />
        <span>--</span>
        <input class="input-item" type="text" placeholder="请输入" />
      </div>
      <!-- 期限 -->
      <div class="clear sel-item">
        <div class="float-left sel-title">期限</div>
        <div class="float-left" v-for="item in form.expiresList" :key="item.label">
          <SelectItem
            :selText="item.value"
            :selActive="item.active"
            @hit="item.active=!item.active"
          ></SelectItem>
        </div>
      </div>
    </div>

    <!-- 查询 -->
    <div>
      <div class="button-item-active" @click="submitForm()">
        <span class="button-text">查询</span>
      </div>
      <div class="button-item">
        <span class="button-text" @click="resetForm()">重置</span>
      </div>
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
import SelectItem from '@/components/selectitem'
export default {
  components: {
    SelectItem,
  },
  data() {
    return {
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
.pro-rate {
  color: #d13051;
}

.pro-type {
  background: #ffffff;
  padding: 18px 40px;
  margin-bottom: 14px;
  border-left: solid 5px #d13051;
}

.sel-item {
  margin-bottom: 14px;
}
.sel-title {
  width: 50px;
  height: 22px;
  line-height: 22px;
  font-size: 12px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(61, 61, 61, 1);
  text-align: left;
}
.buttons {
  text-align: center;
  margin-top: 36px;
}
.button-item {
  display: inline-block;
  width: 99px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgba(190, 157, 98, 1);
  border-radius: 15px;
  text-align: center;
  margin: 0 10px;
}
.button-item-active {
  display: inline-block;
  width: 99px;
  height: 30px;
  line-height: 30px;
  border: 1px solid rgba(208, 47, 80, 1);
  border-radius: 15px;
  text-align: center;
  margin: 0 10px;
}
.button-item > .button-text {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(190, 157, 98, 1);
}
.button-item-active > .button-text {
  font-size: 16px;
  font-family: SimHei;
  font-weight: 400;
  color: rgba(208, 47, 80, 1);
}

.input-item {
  width: 120px;
  height: 22px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(83, 83, 83, 1);
  border-radius: 11px;
  outline: none;
  margin: 0 12px;
}

/* 页码 */
.pagination-block {
  text-align: right;
}
.pagination-block /deep/ .ui-pagination {
  display: inline-block;
}
</style>
