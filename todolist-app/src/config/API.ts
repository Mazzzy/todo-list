const API_BASE_ADDRESS = `https://jsonplaceholder.typicode.com/todos/`;

export default class API {
    static getTodos() {
        const uri = API_BASE_ADDRESS;
        return fetch(uri, {
            method: "GET",
        });
    }
}
