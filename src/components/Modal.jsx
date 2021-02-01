/* eslint-disable react/prop-types */
import React from 'react';
import { Modal, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

export default function CustomModal({
  isModalVisible,
  handleOk,
  handleCancel,
}) {
  return (
    <Modal
      title="Sign In"
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <Form>
        <Form.Item
          name="Email"
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
            {
              min: 6,
              message: 'your email is not valid!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
            {
              min: 6,
              max: 18,
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
