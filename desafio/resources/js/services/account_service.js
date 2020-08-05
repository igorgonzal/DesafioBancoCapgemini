import {
    http,
    httpFile
} from './http_service';

export function createAccount(data) {
    return httpFile().post('/api/account', data);
}

export function getBalance() {
    return http().get('/api/account');
}
