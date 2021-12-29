import * as vsComponents from './components'
import './style/vuesax.styl'
import vsTheme from './utils/theme.js'
import DefineVuesaxMixin from './defineGlobalMixin'
import vuesaxOptions from './utils/options'
import axios from 'axios'
import Qs from "qs";
import VueCookies from 'vue-cookies'
import VueDatepickerUi from 'vue-datepicker-ui'
import 'vue-datepicker-ui/lib/vuedatepickerui.css';

const install = (Vue, options={}) => {
  // set default options
  for(let prop in vuesaxOptions) {
    if(!options[prop]) {
      options[prop] = vuesaxOptions[prop]
    }
  }
  // Use Components
  Object.values(vsComponents).forEach((vsComponent) => {
    Vue.use(vsComponent)
  })
  Vue.use(VueCookies)
  // 创建 axios 实例
  const service = axios.create({
      baseURL: 'http://101.43.145.27:8080/', 
      timeout: 600000 // 请求超时时间
  })
  service.interceptors.request.use(
      config => {
          // if (!config.donNotShowLoading) {
          //     showLoading()
          // }
          config.data = JSON.stringify(config.data)
          config.headers = {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              'x-token': VueCookies.get("x-token"),
              'x-user-id': VueCookies.get("x-user-id")
          }
          return config
      },
      error => {
          closeLoading()
          ElMessage({
              showClose: true,
              message: error,
              type: 'error'
          })
          return error
      }
  )
  
  Vue.component('Datepicker', VueDatepickerUi)
  Vue.prototype.axios = service
  Vue.prototype.Qs = Qs
  Vue.prototype.cookies = VueCookies

  if(options){
    if(options.hasOwnProperty('theme')){
      if(options.theme.hasOwnProperty('colors')){
        if (typeof window !== 'undefined') {
          vsTheme.vsfunction(options.theme.colors, options.server)
        }
      }
    }
  }
  // Define vuesax functions and properties ($vs)
  DefineVuesaxMixin(Vue, options);
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install

export { default as vsButton } from './components/vsButton'
export { default as vsSelect } from './components/vsSelect'
export { default as vsSwitch } from './components/vsSwitch'
export { default as vsCheckbox } from './components/vsCheckBox'
export { default as vsRadio } from './components/vsRadio'
export { default as vsInput } from './components/vsInput'
export { default as vsTabs } from './components/vsTabs'
export { default as vsSlider } from './components/vsSlider'
export { default as vsInputNumber } from './components/vsInputNumber'
export { default as vsTooltip } from './components/vsTooltip'
export { default as vsUpload } from './components/vsUpload'
export { default as vsPopup } from './components/vsPopup'
export { default as vsAlert } from './components/vsAlert'
export { default as vsChip } from './components/vsChip'
export { default as vsProgress } from './components/vsProgress'
export { default as vsCard } from './components/vsCard'
export { default as vsList } from './components/vsList'
export { default as vsAvatar } from './components/vsAvatar'
export { default as vsPagination } from './components/vsPagination'
export { default as vsBreadcrumb } from './components/vsBreadcrumb'
export { default as vsPrompt } from './components/vsPrompt'
export { default as vsDivider } from './components/vsDivider'
export { default as vsSpacer } from './components/vsSpacer'
export { default as vsIcon } from './components/vsIcon'
export { default as vsNavbar } from './components/vsNavbar'
export { default as vsSideBar } from './components/vsSideBar'
export { default as vsDropDown } from './components/vsDropDown'
export { default as vsTable } from './components/vsTable'
export { default as vsTextarea } from './components/vsTextarea'
export { default as vsCollapse } from './components/vsCollapse'
export { default as vsImages } from './components/vsImages'
//New Component import

//layout
export { default as vsRow } from './layout/vsRow/'
export { default as vsCol } from './layout/vsCol/'



