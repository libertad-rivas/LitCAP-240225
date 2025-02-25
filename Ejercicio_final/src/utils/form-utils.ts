export function emailValido(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function passwordValida(password: string): boolean{
    const minLength = 8;
    const mayusTest = /[A-Z]/.test(password);
    const minusTest = /[a-z]/.test(password);
    const numerosTest = /[0-9]/.test(password);
    const caracteresTest = /[.,!#$@%&]/.test(password);

    return (
        password.length >= minLength &&
        mayusTest &&
        minusTest &&
        numerosTest &&
        caracteresTest
    );
}