<template>
    <el-dialog :visible.sync="dialogVisible" :append-to-body="true" width="340px" :close-on-click-modal="false" custom-class="login-dialog">
        <div class="login-body">
            <i class="icon el-icon-service"></i>
            <div class="from">
                <div class="input-items">
                    <div class="input-box">
                        <div class="l-icon flex-c-c">
                            <i class="iconfont icon-shoujihao"></i>
                        </div>
                        <el-input :autofocus="true" v-model="phone" clearable placeholder="请输入手机号"></el-input>
                    </div>
                    <div class="input-box border-t">
                        <div class="l-icon flex-c-c">
                            <i class="iconfont icon-mima"></i>
                        </div>
                        <el-input v-model="password" type="password" clearable placeholder="请输入密码"></el-input>
                    </div>
                </div>
                <div class="btns">
                    <el-button type="danger" :disabled="!disabled" @click="loginClick" :loading="loading">立即登录</el-button>
                </div>
            </div>
        </div>
    </el-dialog>
</template>
<script>
import { login } from '../../api/index'
export default {
    data() {
        return {
            dialogVisible: false,
            phone: '',
            password: '',
            loading: false
        }
    },
    mounted() {
        this.$bus.$on('login', res => {
            this.dialogVisible = true
        })
    },
    methods: {
        loginClick() {
            this.loading = true;
            login(this.phone, this.password).then(res => {
                this.loading = false;
                this.dialogVisible = false;
                this.$store.dispatch('SET_LOGIN', res)

            }).catch(res => {
                this.loading = false
            })
        }
    },
    computed: {
        disabled() {
            return this.phone.length === 11 && this.password.length > 1
        }
    }
}
</script>

<style lang="scss" scoped>
.login-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon {
    color: #f56c6c;
    font-size: 80px;
  }
  /deep/ .from {
    width: 260px;
    margin-top: 50px;
    .input-items {
      background: white;
      border: 1px solid #f0f0f0;
      border-radius: 2px;
      overflow: hidden;
    }
    .input-box {
      display: flex;
      align-items: center;
      .l-icon {
        width: 40px;
        height: 40px;
        i {
          font-size: 20px;
          color: #999;
        }
      }
      .el-input__inner {
        border: none;
        padding: 0;
      }
    }
    .border-t {
      border-top: 1px solid #f0f0f0;
    }
    .btns {
      margin-top: 30px;
      margin-bottom: 100px;
      button {
        width: 100%;
      }
    }
  }
}
</style>
