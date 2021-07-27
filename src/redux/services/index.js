import auth from './auth.services';

//API URL 
export const API_URL = "https://example.com";

export default {
    auth : auth(API_URL)
}