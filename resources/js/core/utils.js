export function getAge() {
    const today = new Date();
    const birthDate = new Date('2005-10-29');
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

export function getCurrentYear() {
    return new Date().getFullYear();
}