export interface GetUserDataOkResponse {
    data: GetUserDataOkResponseData;
    detail: string;
    error: string | null;
    success: boolean;
}
interface GetUserDataOkResponseData {
    authId: string;
    baseEmail: string;
    cooldownUntil: string;
    createdAt: string;
    customer: string;
    email: string;
    id: number;
    isSubscribed: boolean;
    plan: number;
    premiumExpiresAt: string;
    server: number;
    settings: Settings;
    totalDownloaded: number;
    updatedAt: string;
    userReferral: string;
}
interface Settings {
    anothersetting: string;
    setting: string;
}

export interface GetUpStatusOkResponse {
    data: any;
    detail: string;
    error: string | null;
    success: boolean;
}

export interface CreateWebDownloadRequest {
   link: string;
}