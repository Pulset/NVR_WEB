<template>
  <div class="login-container">
    <div class="container">
      <div class="login-style">Login</div>
      <el-input v-model="username" placeholder="用户名" @blur="blurHandle"></el-input>
      <!-- <el-input v-model="password" placeholder="密码" show-password></el-input> -->
      <input type="password" v-model="password" placeholder="密码" class="password-style" />
      <div>
        <el-button type="primary" round class="login-button" @click="loginHandle">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    loginHandle() {
      // console.log(this.username,this.password);
      var _this = this;
      if (this.username && this.password) {
        this.ajax
          .post("http://yapi.demo.qunar.com/mock/81186/login", {
            username: this.username,
            password: this.password
          })
          .then(function(res) {
            console.log(res);
            _this.$message({
              message: "操作成功",
              type: "success"
            });
          })
          .catch(function(error) {
            // handle error
            console.log(error);
            _this.$message({
              message: "操作失败",
              type: "error"
            });
          });
      } else {
        _this.$message({
          message: "请输入正确的用户名和密码",
          type: "error"
        });
      }
    },
    blurHandle() {
      console.log(blur);
    }
  }
};
</script>

<style>
.login-style {
  margin-bottom: 90px;
  font-size: 30px;
}
.login-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-content: center;
  text-align: center;
  align-items: center;
  background: rgb(241, 241, 241);
}
.container {
  height: 400px;
  width: 400px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
}
.login-button {
  margin-top: 30px;
  width: 260px;
}
.password-style {
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  -webkit-transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 260px;
  margin: 10px auto;
}
.password-style::placeholder {
  color: #c0c4cc;
}
</style>