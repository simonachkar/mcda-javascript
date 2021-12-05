
/** With Callbacks */
const loadData = (url, successCallback, failureCallback) => {
    setTimeout(() => {
        try {
            successCallback(url)
        } catch (err) {
            failureCallback(err)
        }
    }, 1000)
}

// loadData('url-1', (response) => {
//     loadData(`${response}?paramA=3`, (nextResponse) => {
//         loadData(`${nextResponse}&paramB=xyz`, (finalResponse) => {
//             console.log(finalResponse)
//         }, (err => {
//             console.log(err);
//         }))
//     }, (error) => {
//         console.log(error)
//     })
// }, (error) => {
//     console.log(error)
// })

/** With Promises */
const loadDataPromise = (url) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            try {
                // throw new Error("Just for fun")
                resolve(url)
            } catch (err) {
                reject(err)
            }
        }, 1000)
    })
}

// loadDataPromise('url-1')
//     .then(response => {
//         return loadDataPromise(`${response}?paramA=3`)
//     }).then(nextResponse => {
//         return loadDataPromise(`${nextResponse}&paramB=xyz`)
//     }).then(finalResponse => {
//         console.log(finalResponse)
//     }).catch((error) => {
//         console.log(error)
//     })
