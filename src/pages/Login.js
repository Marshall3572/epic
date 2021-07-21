import {Form, Input, Button, Checkbox} from 'antd'
import React from 'react'
import styled from 'styled-components'
import {useStores} from '../stores'
import {useHistory} from 'react-router-dom'

const Wrapper = styled.div`
  max-width: 600px;
  margin: 30px auto;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2\);
  border-radius: 4px;
  padding: 20px;
`
const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`

const Component = () => {

  const {AuthStore} = useStores()
  const history = useHistory()
  const onFinish = (values) => {
    console.log('Success:', values)
    AuthStore.setUsername(values.username)
    AuthStore.setPassword(values.password)
    AuthStore.login()
      .then(() => {
        console.log('登陆成功, 跳转到首页')
        history.push('/')
      }).catch(() => {
      console.log('登录失败，什么都不做')
    })
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }


  const validateUsername = (rule, value) => {
    if (/\W/.test(value)) return Promise.reject('不能出现字母数字下划线以外的字符')
    if (value.length < 4 || value.length > 10) return Promise.reject('用户名长度要在4～10个字符之间')
    return Promise.resolve()
  }
  // 箭头函数后加()是因为返回了一个对象，不加会被理解为函数体

  return (
    <Wrapper>
      <Title>登陆</Title>
      <Form
        name="basic"
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 18,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="用户名"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            }, {
              validator: validateUsername
            }
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请输入密码',
            }, {
              min: 4,
              message: '密码最少4位数'
            }, {
              max: 10,
              message: '密码最多十位数'
            }
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 18,
          }}
        >
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default Component