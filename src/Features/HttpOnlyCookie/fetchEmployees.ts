// const url = "http://hr.api.placechart.com"
const url = "https://localhost:7777"

export const fetchEmployees = async () => {
    let getEmp = await fetch(url + "/employee", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    });

    if (getEmp.status == 401) {
        await fetch(url + "/Auth/RefreshWithCookie", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });

        getEmp = await fetch(url + "/employee", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: "include"
        });
    }

    return getEmp.json();

};
