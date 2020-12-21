const cond = true;


const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (cond) {
            resolve('Hey! somethingWillHappen resolved!');
        } else {
            reject('Whooops!');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));


const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (cond) {
            setTimeout(() => {
                resolve('Hey! somethingWillHappen2 resolved!');
            }, 2000);
        } else {
            const error = new Error('Whooops!');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('chained .then() in somethingWillHappen2!'))
    .catch(err => console.log(err));


Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {
        console.log('Promise.all([]): Array of results', response);
    })
    .catch(err => console.log(err));

