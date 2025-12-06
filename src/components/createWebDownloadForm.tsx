import React, { useState } from 'react';
import { Card, Button, Space, Form, Input, message } from 'antd';
import { createWebDownload } from "../services/torboxService.ts";

const CreateWebDownloadForm: React.FC = () => {
    const [form]  = Form.useForm();

    const onFinish = async (values: { url: string }) => {
        try {
            await createWebDownload(values.url);
            message.success('Web Download created successfully!');
        } catch (error) {
            message.error('Failed to create web download.');
        }
    };

    const onFinishFailed = () => {
        message.error('Submit failed!');
    };

    return (
        <Space vertical size={16}>
            <Card title="Create Web Download" style={{ width: 300 }}>
                <Form
                    form={form}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        name="url"
                        label="URL"
                        rules={[{ required: true, message: 'URL is required' }, { type: 'url', warningOnly: true }, { type: 'string', min: 6 }]}
                    >
                        <Input placeholder="Input the web download URL" />
                    </Form.Item>
                    <Form.Item>
                        <Space>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </Space>
    );
};

export default CreateWebDownloadForm;