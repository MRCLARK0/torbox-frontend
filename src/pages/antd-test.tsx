import React, { useState } from 'react';
import { Button, Space, DatePicker, message, Alert, version } from 'antd';

const App = () => {
    const [date, setDate] = useState(null);
    const [messageApi, contextHolder] = message.useMessage();
    const handleChange = value => {
        messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`)
    setDate(value);
    }

    return (
      <div style={{ width: 400, margin: '100px auto' }}>
        <h1>antd version: {version}</h1>
      <Space>
          <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
            <Alert title="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
        </div>
        {contextHolder}
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}

export default App
