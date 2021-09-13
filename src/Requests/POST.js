import { BASE_URL } from '../config';
const POST = async (path, body, JWT) => {
    try {
        const myHeaders = new Headers();
        if (JWT) {
            myHeaders.append("Authorization", `Bearer ${JWT}`);
        }
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify(body);

        const requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        const response = await fetch(`${BASE_URL}${path}`, requestOptions);
        const parsedJSON = await response.json();
        return parsedJSON;
    }
    catch (err) {
        console.error(err);
        return null;
    }
}

export default POST;