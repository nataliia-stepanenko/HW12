"use strict"

const somePromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("Done");
        // reject(new Error("Sorry, an error has occurred"));
    }, 5000);
});


// .then / .catch
somePromise
    .then(result => console.log(result))
    .catch(err => console.error(err))
    .finally(() => console.log("Promise was finished!"));


// async / await + try...catch
async function makeDiffWay() {
    try {
        const result = await somePromise;
        console.log(result);
    } catch(error) {
        console.error(error);
    } finally{
        console.log("Async/await promise was finished!");
    }
}
makeDiffWay();
