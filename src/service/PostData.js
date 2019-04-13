export function PostData(userData) {
 let BaseURL = 'http://localhost:8000/api/v1/login';
 //let BaseURL = 'http://localhost/PHP-Slim-Restful/api/';
 return new Promise((resolve, reject) =>{
 fetch(BaseURL, {
    method: 'POST',
    body: JSON.stringify(userData)
})
.then((response) => response.json())
.then((res) => {
 resolve(res);
})
.catch((error) => {
 reject(error);
});
});
}

