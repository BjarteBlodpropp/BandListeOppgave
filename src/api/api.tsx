// eslint-disable-next-line @typescript-eslint/ban-types
async function doRequest(url: string, httpMethod: string, body?: object) {
    return fetch(url, {
        method: httpMethod,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json; charset=UTF-8',
        },
    }).then(response => response.json());
}

export const getBands = () => doRequest('http://localhost:3001/band/', 'GET');

export const getBand = (id: number) => doRequest(`http://localhost:3001/band/${id}`, 'GET');

export const getRating = async (id: number) => {
    const data = await doRequest(`http://localhost:3001/band/${id}`, 'GET').then(e => e);
    return data.rating;
};

export const setRating = async (id: number, value: number) => {
    if (value >= 0 && value <= 5) {
        doRequest(`http://localhost:3001/band/${id}`, 'PATCH', { rating: value });
    } else {
        console.log(`new rating(${value}) can't be outside range 0 - 5`);
    }
};
