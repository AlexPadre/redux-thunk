let count = 0;

export const incrementCount = () => {
    return new Promise((resolve, reject) => setTimeout(() => {
        // resolve(++count)
        parseInt(Math.random() * 10) % 2 === 0 ? resolve(++count) : reject();
    }, 1000)
    );
}