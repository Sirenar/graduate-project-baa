import http, { post } from '../utils/http';

export const login = info => post('/api/doLogin', info);

