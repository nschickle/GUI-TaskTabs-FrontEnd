// will retry the fetch request if failure occurs
export class RetryableFetch{

    //recursively call fetch_retry until there is a successful request or the last attempt is error
    //modified from : https://dev.to/ycmjason/javascript-fetch-retry-upon-failure-3p6g
    public static fetch_retry(request: RequestInfo, init: RequestInit = { }, n: number = 5): Promise<Response> {
        return new Promise(function(resolve, reject) {
            fetch(request, init)
                .then(function(result) {
                    /* on success */
                    resolve(result);
                })
                .catch(function(error) {
                    if (n === 1) return reject(error); // <--- base case!
                    RetryableFetch.fetch_retry(request, init, n - 1)
                        .then(resolve)
                        .catch(reject);
                })
        });
    }
}