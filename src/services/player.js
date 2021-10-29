import http from '../http-common';

function getPlayers()
{
    return http.get('/');
}

export default getPlayers;