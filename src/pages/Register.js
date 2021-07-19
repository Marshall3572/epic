import {Form, Input, Button, Checkbox} from 'antd'
import React from 'react'
import styled from 'styled-components'

const Component = () => {
  const onFinish = (values) => {
    console.log('Success:', values)
  }

  const Wrapper = styled.div`
    max-width: 600px;
    margin: 30px auto;
    box-shadow: 2px 2px 4px rgba(0,0,0,0.2\);
    border-radius: 4px;
    padding: 20px;
  `
  const Title = styled.h1`
    text-align: center;
    margin-bottom: 30px;
  `

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Wrapper>
      <Title>注册</Title>
      <Form
        name="basic"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: '请输入用户名',
            },
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
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          label="确认密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请再次确认密码',
            },
          ]}
        >
          <Input.Password/>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
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