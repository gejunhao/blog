<template>
  <div class="login-container">
    <Card style="width: 3.5rem">
      <Tabs
        :value="activeTabs"
        @on-click="tabsClick"
      >
        <TabPane
          label="登陆"
          icon="logo-apple"
          name="login"
          @on-click="tabsClick"
        >
          <div class="login-form">
            <Form
              ref="formlogin"
              :model="formlogin"
              :rules="rules"
              :label-width="60"
            >
              <FormItem
                prop="account"
                label="账号"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="text"
                    v-model="formlogin.account"
                    placeholder="请输入手机号"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="password"
                label="密码"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="password"
                    v-model="formlogin.password"
                    placeholder="请输入密码"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  @click="handleSubmit('formlogin')"
                >登录</Button>
                <Button
                  @click="handleReset('formlogin')"
                  style="margin-left: 8px"
                >重置</Button>
              </FormItem>
            </Form>
          </div>
        </TabPane>
        <TabPane
          label="注册"
          icon="logo-windows"
          name="register"
          @on-click="tabsClick"
        >
          <div
            class="register-form"
            v-if="activeTabs === 'register'"
          >
            <Form
              ref="formRegister"
              :model="formRegister"
              :rules="rules"
              :label-width="80"
            >
              <FormItem
                prop="username"
                label="用户名"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="text"
                    v-model="formRegister.username"
                    placeholder="请输入用户名"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="age"
                label="年龄"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="text"
                    v-model="formRegister.age"
                    placeholder="请输入年龄"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="email"
                label="邮箱"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="email"
                    v-model="formRegister.email"
                    placeholder="请输入邮箱"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="phone"
                label="手机号"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="text"
                    v-model="formRegister.phone"
                    placeholder="请输入手机号"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="password"
                label="密码"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="password"
                    v-model="formRegister.password"
                    placeholder="请输入密码"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem
                prop="checkpassword"
                label="确认密码"
              >
                <Row>
                  <Col :span="20">
                  <Input
                    type="password"
                    v-model="formRegister.checkpassword"
                    placeholder="请再次输入密码"
                  >
                  </Input></Col>
                </Row>
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  @click="handleSubmit('formRegister')"
                >登录</Button>
                <Button
                  @click="handleReset('formRegister')"
                  style="margin-left: 8px"
                >重置</Button>
              </FormItem>
            </Form>
            <div class="esec">
              <p>说明:</p>
              <ul>
                <li>1.密码填写长度需为8-18个字符</li>
                <li>2.密码必须由字母、数字组成，区分大小写</li>
              </ul>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import { login, register } from '@/api/login'

export default {
  data() {
    const validateAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入年龄'))
      }
      // 模拟异步验证效果
      setTimeout(() => {
        if (!Number.isInteger(Number(value))) {
          callback(new Error('请输入正确年龄'))
        } else {
          callback()
        }
      }, 1000)
    }
    const validateCheckPassword = (rule, value, callback) => {
      if (this.formRegister.password) {
        if (value !== this.formRegister.password) {
          callback(new Error('密码验证有误,请检查两次密码输入是否一致'))
        } else {
          callback()
        }
      } else {
        callback(new Error('密码验证有误,请检查两次密码输入是否一致'))
      }
    }
    const validatePhone = (rule, value, callback) => {
      const regExp = new RegExp(/^1[35678]\d{9}/g)
      const check = regExp.test(value)
      if (check) {
        callback()
      } else {
        callback(new Error('请输入有效的手机号'))
      }
    }
    const validatePassWord = (rule, value, callback) => {
      const regExp = new RegExp(/^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{8,18}$/)

      const check = regExp.test(value)
      if (check) {
        callback()
      } else {
        callback(new Error('输入密码格式有误'))
      }
    }

    return {
      account: '',
      password: '',
      activeTabs: 'register',
      formlogin: {
        account: '',
        password: ''
      },
      formRegister: {
        username: '',
        age: '',
        account: '',
        email: '',
        password: '',
        checkpassword: '',
        phone: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名',
            trigger: 'blur'
          },
          {
            type: 'string',
            max: 12,
            message: '不能超过12个字符',
            trigger: 'blur'
          }
        ],
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: 'blur'
          },
          {
            type: 'string',
            max: 12,
            message: '不能超过12个字符',
            trigger: 'blur'
          }
        ],
        phone: [
          {
            required: true,
            message: '请输入手机号',
            trigger: 'blur'
          },
          { validator: validatePhone, trigger: 'blur' }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          { validator: validatePassWord, trigger: 'blur' }
        ],
        checkpassword: [{ required: true, validator: validateCheckPassword, trigger: 'blur' }],
        email: [
          {
            required: true,
            message: '请输入邮箱',
            trigger: 'blur'
          },
          { type: 'email', message: '请检查邮箱格式', trigger: 'blur' }
        ],
        age: [{ required: true, validator: validateAge, trigger: 'blur' }]
      }
    }
  },
  mounted() {
    this.init()
    console.log(this.$store)
  },
  methods: {
    tabsClick(name) {
      this.activeTabs = name
      this.$route.query.type = name
      this.$forceUpdate()
    },
    handleSubmit(name) {
      const params = {
        ...this[name]
      }
      this.$refs[name].validate(async (valid) => {
        if (valid) {
          if (name === 'formlogin') {
            login(params).then((res) => {
              if (res.code === 1) {
                this.$Message.success(res.msg)
                const data = JSON.stringify(res.data)
                const token = res.token
                localStorage.setItem('authToken', token)
                localStorage.setItem('userInfo', data)
                this.$store.dispatch('user/SET_AUTHTOKEN', token)
                this.$store.dispatch('user/SET_USERINFO', res.data)
                this.$router.push('/home/index')
              } else {
                this.$Message.warning(res.msg)
              }
            })
          } else if (name === 'formRegister') {
            register(params).then((res) => {
              if (res.code === 1) {
                this.$Message.success(res.msg)
                const data = JSON.stringify(res.data)
                const token = res.token
                localStorage.setItem('authToken', token)
                localStorage.setItem('userInfo', data)
                this.$store.dispatch('user/SET_AUTHTOKEN', token)
                this.$store.dispatch('user/SET_USERINFO', res.data)
                this.$router.push('/home/index')
              } else {
                this.$Message.warning(res.msg)
              }
            })
          }
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset(name) {
      this.$refs[name].resetFields()
    },
    init() {
      if (this.$route.query.type) {
        this.activeTabs = this.$route.query.type
      }
    },
    submit() {}
  }
}
</script>

<style lang="scss" scoped>
.login-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .ivu-tabs-nav {
    width: 100%;
    .ivu-tabs-tab {
      width: 50%;
    }
  }
  .esec {
    font-size: 0.12rem;
    p {
      color: #ccc;
    }
    ul {
      li {
        list-style: none;
        padding: 0;
        color: #ccc;
      }
    }
  }
}
</style>