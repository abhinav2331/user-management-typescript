import useCustomFetch from './customFetchHook';

//Get url from enviornment
const REACT_APP_API_LOGIN = process.env.REACT_APP_API_LOGIN;
console.log("URL", REACT_APP_API_LOGIN);

export const login = async (formdata:any): Promise<any> => {
    const { resdata, isLoading, error, fetchApiCall } = useCustomFetch(`${REACT_APP_API_LOGIN}add`, 'POST', formdata);
    //const response =  fetchApiCall(`${REACT_APP_API_LOGIN}add`, 'POST', formdata);
    //console.log("response", response);
    //return response?.data.token;
    //const response = await axios.post(`${API_BASE_URL}/login`, { username, password });
    //return response.data.token; // Assuming the API returns a token upon successful login
};