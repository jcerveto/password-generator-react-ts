export const filterPasswordByUppercase = (password: string, uppercase: boolean) => {
    console.log('filterPasswordByUppercase');
    if (uppercase) {
        return password.replace(/[A-Z]/g, '');
    }
    return password;
}

export const filterPasswordByLowercase = (password: string, lowercase: boolean) => {
    console.log('filterPasswordByLowercase');
    if (lowercase) {
        return password.replace(/[a-z]/g, '');
    }
    return password;
}

export const filterPasswordByNumbers = (password: string, numbers: boolean) => {
    console.log('filterPasswordByNumbers');
    if (numbers) {
        return password.replace(/[0-9]/g, '');
    }
    return password;
}

export const filterPasswordBySymbols = (password: string, symbols: boolean) => {
    console.log('filterPasswordBySymbols');
    if (symbols) {
        return password.replace(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g, '');
    }
    return password;
}

export const filterPassword = (password: string, uppercase: boolean, lowercase: boolean, numbers: boolean, symbols: boolean) => {
    let newPassword = password;
    newPassword = filterPasswordByUppercase(newPassword, uppercase);
    newPassword = filterPasswordByLowercase(newPassword, lowercase);
    newPassword = filterPasswordByNumbers(newPassword, numbers);
    newPassword = filterPasswordBySymbols(newPassword, symbols);
    return newPassword;
}
