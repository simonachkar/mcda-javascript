/** --------------------------
 * With Callbacks (callback hell)
 * -------------------------- */

// Simulates fetching data from server
const loadData = (url, successCallback, failureCallback) => {
  setTimeout(() => {
    try {
      successCallback(url);
    } catch (err) {
      failureCallback(err);
    }
  }, 1000);
};

// Example of nested callbacks
loadData(
  "url-1",
  (response) => {
    loadData(
      `${response}?paramA=3`,
      (nextResponse) => {
        loadData(
          `${nextResponse}&paramB=xyz`,
          (finalResponse) => {
            console.log("Final response (callbacks):", finalResponse);
          },
          (err) => console.error("Error at step 3:", err)
        );
      },
      (err) => console.error("Error at step 2:", err)
    );
  },
  (err) => console.error("Error at step 1:", err)
);

// 👆 Hard to read, hard to maintain → callback hell

/** --------------------------
 * With Promises
 * -------------------------- */
const loadDataPromise = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(url);
        // reject(new Error("Something went wrong")) // uncomment to test error
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
};

// Promise chaining
loadDataPromise("url-1")
  .then((response) => loadDataPromise(`${response}?paramA=3`))
  .then((nextResponse) => loadDataPromise(`${nextResponse}&paramB=xyz`))
  .then((finalResponse) =>
    console.log("Final response (promise):", finalResponse)
  )
  .catch((err) => console.error("Caught error:", err));

/** --------------------------
 * With Async / Await (cleanest)
 * -------------------------- */
async function run() {
  try {
    const response = await loadDataPromise("url-1");
    const nextResponse = await loadDataPromise(`${response}?paramA=3`);
    const finalResponse = await loadDataPromise(`${nextResponse}&paramB=xyz`);
    console.log("Final response (async/await):", finalResponse);
  } catch (err) {
    console.error("Caught error:", err);
  }
}

run();
