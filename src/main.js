import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';

Vue.config.productionTip = false
import {
    Container,
    Header,
    Aside,
    Main,
    Card,
    Input,
    Button,
    Table,
    TableColumn,
    Form,
    FormItem,
    Radio,
    RadioGroup,
    Collapse,
    CollapseItem
} from 'element-ui';
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Card)
Vue.use(Input)
Vue.use(Button)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Collapse)
Vue.use(CollapseItem)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')