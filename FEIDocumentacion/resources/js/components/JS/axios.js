const BASE_URL = '';

function postData(params,urlpost){
    var url=urlpost;
    return axios({
        method: 'POST',
        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
        data: params,
        url: url,
        validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
        },
    }).then((response) => {
        return response.data;
    }).catch(error => {
        //console.log(error.response.status);
        //console.log("request: ",error.request);
        //console.log('Error', error.message);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            console.log(error.response.status);
            console.log("response");
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('request',error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    })
}

function putData(params,urlpost){
    var url=urlpost;
    return axios({
        method: 'PUT',
        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
        data: params,
        url: url,
        validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
        },
    }).then((response) => {
        return response.data;
    }).catch(error => {
        //console.log(error.response.status);
        //console.log("request: ",error.request);
        //console.log('Error', error.message);
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            // console.log(error.response.data);
            console.log(error.response.status);
            console.log("response");
            // console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log('request',error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
            console.log("error");
        }
        return error;
    })
}


function orderByGet(pagination,urlget){
    var url=urlget;
    //initialize en mounted
    return axios.get(url)
        .catch(error => {
            //console.log(error.response.status);
            //console.log("request: ",error.request);
            //console.log('Error', error.message);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                console.log(error.response.status);
                console.log("response");
                // console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                //console.log('request',error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
                console.log("error");
            }
            return error;
        })
        .then((response) => {
            const { sortBy, descending, page, rowsPerPage } = pagination

            let items = response.data;
            const total = items.length

            if (pagination.sortBy) {
                items = items.sort((a, b) => {
                    const sortA = a[sortBy]
                    const sortB = b[sortBy]

                    if (descending) {
                        if (sortA < sortB) return 1
                        if (sortA > sortB) return -1
                        return 0
                    } else {
                        if (sortA < sortB) return -1
                        if (sortA > sortB) return 1
                        return 0
                    }
                })
            }

            if (rowsPerPage > 0) {
                items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
            }
            //this.usuarios=items
            return items
        });
}

function getData(urlget){
    var url="http://127.0.0.1:8000/"+urlget;
    return axios({
        method: 'GET',
        headers: {'Content-Type': 'application/x-www-form-urlencoded' },
        url: url,
        validateStatus: (status) => {
            return true; // I'm always returning true, you may want to do it depending on the status received
        },
    })
        .catch(error => {
            return 'false';
            console.log(error);
        }).then((response) => {
            return response.data;
        });
}

function postDataFile() {/* Stub */}

export{postDataFile}
export{postData, putData}
export{getData, orderByGet}
