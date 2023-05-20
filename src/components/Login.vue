<template>
  <div class="box">
    <div class="login_box">
      <!-- 头像 -->
      <div class="image">
        <img src="../assets/user_pic.jpg" alt="" />
      </div>
      <!-- 表单 -->
      <el-form
        class="login_form"
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            show-password
            v-model="loginForm.password"
            prefix-icon="iconfont icon-password"
          ></el-input>
        </el-form-item>
        <!-- 按钮区域 -->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkspaceJsonLogin",

  data() {
    return {
      loginForm: {
        username: "zs1",
        password: "111111",
      },
      loginFormRules: {
        username: [
          // 鼠标失去焦点时触发trigger
          { required: true, message: "请输入登录名称", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 2,
            max: 8,
            message: "长度在 2 到 8 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },

  mounted() {},

  methods: {
    resetLoginForm() {
      // console.log(this)
      this.$refs.loginFormRef.resetFields();
    },
    login() {
        // 点击调用
      this.$refs.loginFormRef.validate(async (valid) => {
        // console.log(valid)
        if (!valid) return;
        console.log(this.loginForm.username)
        // 发起登录请求
        const {data:res} = await this.$http.post(
          "/api/login",{
            username:this.loginForm.username,
            password:this.loginForm.password
          }
        );
        console.log(res);
        if(res.status!=0){
            // 调用element-ui中的弹窗功能
            return this.$message.error("登录失败");
        }
        this.$message.success("登录成功");
        // 将登录成功的token保存到客户端的sessionStorage中
        // 项目中除了登录以外的其他接口，必须在登录之后才能访问
        // token只应在当前网站打开期间生效，
        window.sessionStorage.setItem('token',res.token);
        this.$router.push("/home");
      });
    },
  },
};
</script>

<style scoped>
.box {
  background-color: #f38888;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_box {
  width: 450px;
  height: 300px;
  background-color: #ffffff;
  border-radius: 3px;
}
.login_box .image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  transform: translateY(-50%);
  /* overflow: hidden; */
  border-radius: 50%;
  border: 1px solid #eee;
  box-shadow: 0 0 10px #ddd;
  padding: 10px;
  background-color: #fff;
}
img {
  border-radius: 50%;
  width: 100%;
}
.btns {
  display: flex;
  flex-direction: row-reverse;
  /* margin-right: 10px ; */
}
.login_form {
  padding: 0 20px;
}
</style>
