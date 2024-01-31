type RequestProp = {
    url: string;
    requestBody: string | RequestBodyCafe | RequestBodyProduct | RequestBodyLogin;
}

type RequestBodyCafe = {
    sessionId: string;
    cafeId: string;
}

type RequestBodyProduct = {
    sessionId: string;
    productId: string;
}

type RequestBodyLogin = {
    email: string;
    password: string;
}

export const fetchData = async function ({ requestBody, url }: RequestProp) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf8',
            },
            body: JSON.stringify(requestBody)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        throw error;
    }
}