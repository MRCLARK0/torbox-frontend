import React, { useState } from 'react';
import { Card, Button, Space } from 'antd';
import { fetchUserData } from '../services/torboxService';

interface UserDetails {
    data: any;
    detail: string;
    error: string | null
    success: boolean;
}

const UserDetailsCard: React.FC = () => {
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleFetch = async () => {
        try {
            const userDetails: UserDetails = await fetchUserData();
            setUserDetails(userDetails);
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