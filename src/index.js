import $ from 'jquery';

const getData = async (endpoint) => {
    const baseUrl = 'https://60bcd47bb8ab37001759fbbe.mockapi.io/';
    const apiCall = await $.get(`${baseUrl}${endpoint}`,
        data => console.log('data:', data)
    );
    return apiCall;
}
    const btn = document.createElement('button');
    btn.innerText = 'Get Users';
    document.body.appendChild(btn);
    btn.onclick = async () => {
        await getData('users');
    }