import $ from 'jquery';
const baseUrl = 'https://60bcd47bb8ab37001759fbbe.mockapi.io/';

const getData = async (endpoint, token) => {
    const headerParams = {'Authorization':`bearer ${token}`};
   const obj = {
        type: 'get',
        url: `${baseUrl}${endpoint}`,
        headers: headerParams,
        data: [],
        dataType: 'json',
        processData: false,
        success: data => {
            console.log('data:', data)
        },
    };
    $.ajax(obj);
}

export {getData}
