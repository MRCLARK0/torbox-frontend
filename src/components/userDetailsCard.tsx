import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';
import { fetchUserData } from '../services/torboxService';
import { GetUserDataOkResponse } from '../types/torbox';

const UserDetailsCard: React.FC = () => {
    const [userDetails, setUserDetails] = useState<GetUserDataOkResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetch = async () => {
        try {
            const fetchedUserDetails: GetUserDataOkResponse = await fetchUserData();
            setUserDetails(fetchedUserDetails);
            setError(null);
        } catch (err) {
            setError("Failed to fetch user details");
            setUserDetails(null);
        }
    };

    const { data, detail, success } = userDetails || { data: null, detail: '', success: false };

    return (
        <Space vertical size={16}>
            <Card title="User Details" style={{ width: 300 }}>
                <Button type="primary" onClick={handleFetch}>Fetch</Button>
                <p><strong>Success:</strong> {success ? 'Yes' : 'No'}</p>
                <p><strong>Detail:</strong> {detail}</p>
                <p><strong>Error:</strong> {error ? error : 'None'}</p>
                <p><strong>Data:</strong> {data ? JSON.stringify(data, null, 2) : 'No data available'}</p>
            </Card>
        </Space>
    );
};

export default UserDetailsCard;