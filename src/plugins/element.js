import Vue from "vue";
import { Message, Button, Form, FormItem, Input } from "element-ui";
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Form);
Vue.use(Button);
Vue.prototype.$message = Message;
