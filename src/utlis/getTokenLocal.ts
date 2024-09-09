export function getTokenInLocalStorage(): string | null {
    const tokenString = localStorage.getItem('accessToken') as string;
    if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        return tokenObject;
    }
    return null;
}

export function getIdInLocalStorage(): string | null {
    const tokenString = localStorage.getItem('id') as string;
    if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        return tokenObject;
    }
    return null;
}


export function getPhoneInLocalStorage(): string | null {
    const tokenString = localStorage.getItem('phone') as string;
    if (tokenString) {
        const tokenObject = JSON.parse(tokenString);
        return tokenObject;
    }
    return null;
}
