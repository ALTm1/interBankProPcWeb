
<template>
  <div class="organ-query">
    <!-- 标题导航 -->
    <div>
      <ui-breadcrumb separator-class="ui-icon-arrow-right">
        <ui-breadcrumb-item class="ui-icon-add-location">会员中心</ui-breadcrumb-item>
        <ui-breadcrumb-item>机构认证</ui-breadcrumb-item>
      </ui-breadcrumb>
    </div>
    <ui-form
      label-width="250px"
      ref="form"
      :model="organInfo"
      :rules="rules"
      style="width: 90%;margin:0 auto"
      align="left"
    >
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>机构信息</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <ui-form-item label="机构全称：" prop="organFullname">
            <ui-input-business v-model="organInfo.organFullname" placeholder="请输入机构全称"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="部门：" prop="department">
            <ui-select style="width: 100%" v-model="organInfo.department" placeholder="请选择">
              <ui-option
                v-for="item in departmentOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></ui-option>
            </ui-select>
          </ui-form-item>
          <ui-form-item label="归属机构全称：" prop="ownershipOrganization">
            <ui-input-business v-model="organInfo.ownershipOrganization" placeholder="请输入归属机构全称"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="归属机构统一社会信用代码:" prop="ownershipSocialCreditCode">
            <ui-input-business
              v-model="organInfo.ownershipSocialCreditCode"
              placeholder="请输入归属机构统一社会信用代码"
            ></ui-input-business>
          </ui-form-item>
          <ui-form-item label="归属机构组织机构代码:" prop="ownershipOrganizationCode">
            <ui-input-business
              v-model="organInfo.ownershipOrganizationCode"
              placeholder="请输入归属机构组织机构代码"
            ></ui-input-business>
          </ui-form-item>
        </ui-col>
        <ui-col :span="12">
          <ui-form-item label="机构类型：" prop="organType">
            <ui-select style="width: 100%" v-model="organInfo.organType" placeholder="请选择">
              <ui-option
                v-for="item in  organTypeOptions"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></ui-option>
            </ui-select>
          </ui-form-item>
          <ui-form-item label="是否为总机构：">
            <ui-radio v-model="radio" label="1">是</ui-radio>
            <ui-radio v-model="radio" label="2">否</ui-radio>
          </ui-form-item>
          <ui-form-item label="附件-营业执照扫描件（加盖公章）：">
            <a href="javascript:;" style="margin: 0 10px;color:#409eff">预览</a>
            <a href="javascript:;" style="color:#409eff">重新上传</a>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <!--证件信息 -->
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>证件信息</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <ui-form-item label="统一社会信用代码：" prop="SocialCreditCode">
            <ui-input-business v-model="organInfo.SocialCreditCode" placeholder="请输入统一社会信用代码"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="法定代表人：" prop="legalPerson">
            <ui-input-business v-model="organInfo.legalPerson" placeholder="请输入法定代表人"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="净资产（亿）：" prop="netAsset">
            <ui-input-business v-model="organInfo.netAsset" placeholder="请输入净资产（亿）"></ui-input-business>
          </ui-form-item>
        </ui-col>
        <ui-col :span="12">
          <ui-form-item label="组织机构代码证：" prop="organizationCodeCertificate">
            <ui-input-business
              v-model="organInfo.organizationCodeCertificate"
              placeholder="请输入组织机构代码证"
            ></ui-input-business>
          </ui-form-item>
          <ui-form-item label="资产规模（亿）：" prop="assetSize">
            <ui-input-business v-model="organInfo.assetSize" placeholder="请输入资产规模（亿）"></ui-input-business>
          </ui-form-item>
        </ui-col>
      </ui-row>
      <!--当前机构地址  -->
      <ui-row>
        <ui-col>
          <div class="pro-info item item1">
            <div class="item-title">
              <p></p>
              <p>当前机构地址</p>
              <div class="arrow-right"></div>
            </div>
          </div>
        </ui-col>
      </ui-row>
      <ui-row>
        <ui-col :span="12">
          <ui-form-item label="省、市：" prop="cityValue">
            <div class="block">
              <ui-cascader
                style="width: 100%"
                v-model="organInfo.cityValue"
                :options="cityOptions"
                @change="handleChange"
              ></ui-cascader>
            </div>
          </ui-form-item>
          <ui-form-item label="联系人：" prop="contacts">
            <ui-input-business v-model="organInfo.contacts" placeholder="请输入联系人"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="手机号码:" prop="phone">
            <ui-input-business v-model="organInfo.phone" placeholder="请输入手机号码"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="电子邮件:" prop="email">
            <ui-input-business v-model="organInfo.email" placeholder="请输入电子邮件"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="附件-营业执照扫描件（加盖公章）:">
            <a href="javascript:;" style="margin: 0 10px;color:#409eff">预览</a>
            <a href="javascript:;" style="color:#409eff">重新上传</a>
          </ui-form-item>
        </ui-col>
        <ui-col :span="12">
          <ui-form-item label="详细地址：" prop="detailedAddress">
            <ui-input-business v-model="organInfo.detailedAddress" placeholder="请输入详细地址"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="电话：" prop="tel">
            <ui-input-business v-model="organInfo.tel" placeholder="请输入电话"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="传真：" prop="fax">
            <ui-input-business v-model="organInfo.fax" placeholder="请输入传真"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="用户信息描述：" prop="userInfoDescription">
            <ui-input-business v-model="organInfo.userInfoDescription" placeholder="请输入用户信息描述"></ui-input-business>
          </ui-form-item>
          <ui-form-item label="附件-营业执照扫描件（加盖公章）:">
            <a href="javascripr:;">预览</a>
          </ui-form-item>
        </ui-col>
      </ui-row>
    </ui-form>

    <div class="btn">
      <ui-button type="primary" @click="submitForm('form')">重新认证</ui-button>
    </div>
  </div>
</template>


<script>
import { Phone, Email } from '@/libs/validator'

export default {
  name: 'reauthentication',
  data() {
    return {
      // 机构信息
      organInfo: {
        //  机构全称
        organFullname: '',
        //  部门
        department: '',
        // 归属机构全称
        ownershipOrganization: '',
        // 归属机构统一社会信用代码
        ownershipSocialCreditCode: '',
        // 归属机构组织机构代码证
        ownershipOrganizationCode: '',
        // 机构类型
        organType: '',
        // 统一社会信用代码
        SocialCreditCode: '',
        // 法定代表人
        legalPerson: '',
        // 净资产
        netAsset: '',
        // 组织机构代码证
        organizationCodeCertificate: '',
        // 资产规模
        assetSize: '',
        // 联系人
        contacts: '',
        //  手机号码
        phone: '',
        // 电子邮件
        email: '',
        // 详细地址
        detailedAddress: '',
        // 电话
        tel: '',
        // 传真
        fax: '',
        // 用户信息描述
        userInfoDescription: '',
        cityValue: [],
      },
      // 校验规则
      rules: {
        //  机构全称
        organFullname: [
          {
            required: true,
            message: '机构全称不能为空',
            trigger: 'blur',
          },
        ],
        //  部门
        department: [
          {
            required: true,
            message: '部门不能为空',
            trigger: 'blur',
          },
        ],
        // 归属机构全称
        ownershipOrganization: [
          {
            required: true,
            message: '归属机构全称不能为空',
            trigger: 'blur',
          },
        ],
        // 归属机构统一社会信用代码
        ownershipSocialCreditCode: [
          {
            required: true,
            message: '归属机构统一社会信用代码不能为空',
            trigger: 'blur',
          },
        ],
        // 归属机构组织机构代码证
        ownershipOrganizationCode: [
          {
            required: true,
            message: '归属机构组织机构代码证不能为空',
            trigger: 'blur',
          },
        ],
        // 机构类型
        organType: [
          {
            required: true,
            message: '机构类型不能为空',
            trigger: 'blur',
          },
        ],
        // 统一社会信用代码
        SocialCreditCode: [
          {
            required: true,
            message: '统一社会信用代码不能为空',
            trigger: 'blur',
          },
        ],
        // 法定代表人
        legalPerson: [
          // {
          //   required: true,
          //   message: '归属机构全称',
          //   trigger: 'blur'
          // }
        ],
        // 净资产
        netAsset: [
          {
            required: true,
            message: '净资产不能为空',
            trigger: 'blur',
          },
        ],
        // 组织机构代码证
        organizationCodeCertificate: [
          {
            required: true,
            message: '组织机构代码证不能为空',
            trigger: 'blur',
          },
        ],
        // 资产规模
        assetSize: [
          {
            required: true,
            message: '资产规模不能为空',
            trigger: 'blur',
          },
        ],
        // 联系人
        contacts: [
          {
            required: true,
            message: '联系人不能为空',
            trigger: 'blur',
          },
        ],
        //  手机号码
        phone: [
          {
            required: true,
            message: '手机号码不能为空',
            trigger: 'blur',
          },
          { validator: Phone, trigger: 'blur' },
        ],
        // 电子邮箱
        email: [
          {
            required: true,
            message: '电子邮件不能为空',
            trigger: 'blur',
          },
          { validator: Email, trigger: 'blur' },
        ],
        // 详细地址
        detailedAddress: [
          {
            required: true,
            message: '详细地址不能为空',
            trigger: 'blur',
          },
        ],
        // 电话
        tel: [
          {
            required: true,
            message: '电话不能为空',
            trigger: 'blur',
          },
        ],
        // 传真
        fax: [],
        // 用户信息描述
        userInfoDescription: [
          {
            required: true,
            message: '用户信息描述不能为空',
            trigger: 'blur',
          },
        ],
        // 用户信息描述
        cityValue: [
          {
            required: true,
            message: '省，市不能为空',
            trigger: 'blur',
          },
        ],
      },
      // 是否为总机构
      radio: '1',
      // 部门数据
      departmentOptions: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      // 机构类型
      organTypeOptions: [
        {
          value: '选项1',
          label: '黄金糕',
        },
        {
          value: '选项2',
          label: '双皮奶',
        },
        {
          value: '选项3',
          label: '蚵仔煎',
        },
        {
          value: '选项4',
          label: '龙须面',
        },
        {
          value: '选项5',
          label: '北京烤鸭',
        },
      ],
      // 省市数据
      cityOptions: [
        {
          value: 'zhinan',
          label: '指南',
          children: [
            {
              value: 'shejiyuanze',
              label: '设计原则',
              children: [
                {
                  value: 'yizhi',
                  label: '一致',
                },
                {
                  value: 'fankui',
                  label: '反馈',
                },
                {
                  value: 'xiaolv',
                  label: '效率',
                },
                {
                  value: 'kekong',
                  label: '可控',
                },
              ],
            },
            {
              value: 'daohang',
              label: '导航',
              children: [
                {
                  value: 'cexiangdaohang',
                  label: '侧向导航',
                },
                {
                  value: 'dingbudaohang',
                  label: '顶部导航',
                },
              ],
            },
          ],
        },
        {
          value: 'zujian',
          label: '组件',
          children: [
            {
              value: 'basic',
              label: 'Basic',
              children: [
                {
                  value: 'layout',
                  label: 'Layout 布局',
                },
                {
                  value: 'color',
                  label: 'Color 色彩',
                },
                {
                  value: 'typography',
                  label: 'Typography 字体',
                },
                {
                  value: 'icon',
                  label: 'Icon 图标',
                },
                {
                  value: 'button',
                  label: 'Button 按钮',
                },
              ],
            },
            {
              value: 'form',
              label: 'Form',
              children: [
                {
                  value: 'radio',
                  label: 'Radio 单选框',
                },
                {
                  value: 'checkbox',
                  label: 'Checkbox 多选框',
                },
                {
                  value: 'input',
                  label: 'Input 输入框',
                },
                {
                  value: 'input-number',
                  label: 'InputNumber 计数器',
                },
                {
                  value: 'select',
                  label: 'Select 选择器',
                },
                {
                  value: 'cascader',
                  label: 'Cascader 级联选择器',
                },
                {
                  value: 'switch',
                  label: 'Switch 开关',
                },
                {
                  value: 'slider',
                  label: 'Slider 滑块',
                },
                {
                  value: 'time-picker',
                  label: 'TimePicker 时间选择器',
                },
                {
                  value: 'date-picker',
                  label: 'DatePicker 日期选择器',
                },
                {
                  value: 'datetime-picker',
                  label: 'DateTimePicker 日期时间选择器',
                },
                {
                  value: 'upload',
                  label: 'Upload 上传',
                },
                {
                  value: 'rate',
                  label: 'Rate 评分',
                },
                {
                  value: 'form',
                  label: 'Form 表单',
                },
              ],
            },
            {
              value: 'data',
              label: 'Data',
              children: [
                {
                  value: 'table',
                  label: 'Table 表格',
                },
                {
                  value: 'tag',
                  label: 'Tag 标签',
                },
                {
                  value: 'progress',
                  label: 'Progress 进度条',
                },
                {
                  value: 'tree',
                  label: 'Tree 树形控件',
                },
                {
                  value: 'pagination',
                  label: 'Pagination 分页',
                },
                {
                  value: 'badge',
                  label: 'Badge 标记',
                },
              ],
            },
            {
              value: 'notice',
              label: 'Notice',
              children: [
                {
                  value: 'alert',
                  label: 'Alert 警告',
                },
                {
                  value: 'loading',
                  label: 'Loading 加载',
                },
                {
                  value: 'message',
                  label: 'Message 消息提示',
                },
                {
                  value: 'message-box',
                  label: 'MessageBox 弹框',
                },
                {
                  value: 'notification',
                  label: 'Notification 通知',
                },
              ],
            },
            {
              value: 'navigation',
              label: 'Navigation',
              children: [
                {
                  value: 'menu',
                  label: 'NavMenu 导航菜单',
                },
                {
                  value: 'tabs',
                  label: 'Tabs 标签页',
                },
                {
                  value: 'breadcrumb',
                  label: 'Breadcrumb 面包屑',
                },
                {
                  value: 'dropdown',
                  label: 'Dropdown 下拉菜单',
                },
                {
                  value: 'steps',
                  label: 'Steps 步骤条',
                },
              ],
            },
            {
              value: 'others',
              label: 'Others',
              children: [
                {
                  value: 'dialog',
                  label: 'Dialog 对话框',
                },
                {
                  value: 'tooltip',
                  label: 'Tooltip 文字提示',
                },
                {
                  value: 'popover',
                  label: 'Popover 弹出框',
                },
                {
                  value: 'card',
                  label: 'Card 卡片',
                },
                {
                  value: 'carousel',
                  label: 'Carousel 走马灯',
                },
                {
                  value: 'collapse',
                  label: 'Collapse 折叠面板',
                },
              ],
            },
          ],
        },
        {
          value: 'ziyuan',
          label: '资源',
          children: [
            {
              value: 'axure',
              label: 'Axure Components',
            },
            {
              value: 'sketch',
              label: 'Sketch Templates',
            },
            {
              value: 'jiaohu',
              label: '组件交互文档',
            },
          ],
        },
      ],
    }
  },
  methods: {
    // 省市事件
    handleChange(value) {
      console.log(value)
    },
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          this.$router.push('/member/certificationRes')
          //   this.onSubmit()
        } else {
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.organ-query {
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
  .btn {
    margin-top: 40px;
    width: 100%;
    text-align: center;
  }
  .btn .ui-button {
    width: 30%;
    border-radius: 20px;
    background-color: #ce2848;
    border-color: #ce2848;
    padding: 12px 20px !important;
  }
}
</style>