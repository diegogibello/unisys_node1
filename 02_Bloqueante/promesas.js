function hacerAlgo() {
    return new Promise( (resolve,reject) => {
        setTimeout(()=> {
            let n = Math.random()
            if (n < 0.5){
                resolve(n)
            } else {
                reject(new Error(n))
            }
        },1000)
    })
}

// En ES6 - ES2015

const promesa = hacerAlgo()
console.log(promesa)
promesa
.then((resp) => {
    console.log('Ok', resp)
})
.catch((error) => {
    console.log('Error', error.message)
});

// En ES2017 async y await

// function main() {}   //Es lo mismo que abajo
// main()

// (function main() {}) ()


( async () => {
    try {
        const resp = await hacerAlgo()
        console.log('Ok desde await', resp)
    } catch(err) {
        console.log('Error desde await', err)
    }
}) ()