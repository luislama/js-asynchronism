
const doSomethingAsync = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Do Something Async'), 3000)
            : reject(new Error('Test Error'))
    });
}

const doSomething = async () => {
    const something = await doSomethingAsync()
        .then(response => console.log(response));
    console.log('something');
}

console.log('Before 1');
doSomething();
console.log('After 1');


const anotherFunction = async () => {
    try {
        await doSomethingAsync()
            .then(response => console.log(response));
        console.log('another function');
    } catch (error) {
        console.error(error);
    }
}

setTimeout(() => {
    console.log('Before 2');
    anotherFunction();
    console.log('After 2');
}, 4000);
