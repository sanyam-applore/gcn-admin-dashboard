import { BASE_URL } from '../config';

const GET = async (path, JWT) => {
    try {
        const myHeaders = new Headers();
        if (JWT) {
            myHeaders.append("Authorization", `Bearer ${JWT}`);
        }

        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        const response = await fetch(`${BASE_URL}${path}`, requestOptions)
        const parsedJSON = await response.json();
        return parsedJSON;

    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export default GET;