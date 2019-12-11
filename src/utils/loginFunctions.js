const make_base_auth = (user, password) => {
    const token = user + ':' + password;
    const hash = btoa(token);
    return 'Basic ' + hash;
};

const handleErrors = (response) => {
    if (!response.ok) {
        throw Error(response.status);
    }
    return response;
};

export { handleErrors, make_base_auth };
