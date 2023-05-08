// const url = "http://hr.api.placechart.com"
const url = "https://localhost:7777"

export class AuthService {
    login = async (payload: object) => {
        const loginResponse = await fetch(url + "/auth/login", {
            body: JSON.stringify(payload),
            method:"Post",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
        console.log(loginResponse);
    }
}