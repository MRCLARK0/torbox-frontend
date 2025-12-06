import axios from 'axios';
import { GetUserDataOkResponse } from '../types/torbox';
import { GetUpStatusOkResponse } from '../types/torbox';
import { CreateWebDownloadRequest } from '../types/torbox';

export const fetchUpStatus = async (): Promise<GetUpStatusOkResponse> => {
    try {
        const response = await axios.get('http://localhost:7000/torbox/status');
        console.log("Up Status:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching up status:', error);
        throw Error('Failed to fetch up status from Torbox');
    }
};

export const fetchUserData = async (): Promise<GetUserDataOkResponse> => {
    try {
        const response = await axios.get('http://localhost:7000/torbox/user/me');
        console.log("User Data:", response.data);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw Error('Failed to fetch user data from Torbox');
    }
};

export const createWebDownload = async (url: string): Promise<CreateWebDownloadRequest> => {
    try {
        const formData = new FormData();
        formData.append('link', url);

        const response = await axios.post('http://localhost:7000/torbox/webdownload/create', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        console.log("Response:", response.data);
        return response.data;
    } catch (error) {
        console.Error('Error creating web download:', error);
        throw Error('Failed to create web download for Torbox');
    }
};

//export const createTorrent = async (url: string): Promise<CreateTorrentRequest> => {
//    try {
//        const requestData: CreateTorrentRequest = { url };
//        const response = await axios.post('http://localhost:7000/torbox/torrent/create', requestData);
//        console.log("Response:", response.data);
//    } catch (error) {
//        console.error('Error creating torrent:', error);
//        throw Error('Failed to create torrent for Torbox');
//    }
//};
