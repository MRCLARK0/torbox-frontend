import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';
import { fetchUpStatus } from '../services/torboxService';
import { GetUpStatusOkResponse } from '../types/torbox';

const StatusUpCard: React.FC = () => {
    const [upStatus, setUpStatus] = useState<GetUpStatusOkResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetch = async () => {
        try {
            const status: GetUpStatusOkResponse = await fetchUpStatus();
            setUpStatus(status);
            setError(null);
        } catch (err) {
            setError('Failed to fetch up status');
            setUpStatus(null);
        }
    };

    const { data, detail, success } = upStatus || { data: null, detail: '', success: false };

    return (
        <Space vertical size={16}>
            <Card title="Torbox Up Status" style={{ width: 300 }}>
                <Button type="primary" onClick={handleFetch}>Fetch</Button>
                <p><strong>Success:</strong> {success ? 'Yes' : 'No'}</p>
                <p><strong>Detail:</strong> {detail}</p>
                <p><strong>Error:</strong> {error ? error : 'None'}</p>
                <p><strong>Data:</strong> {data ? JSON.stringify(data, null, 2) : 'No data available'}</p>
            </Card>
        </Space>
    );
};

export default StatusUpCard;