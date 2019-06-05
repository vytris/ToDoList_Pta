const httpGet = (url, callback) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
  
    request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        callback(request.responseText);
      } else {
        // We reached our target server, but it returned an error
        console.log('err');
      }
    };
  
    request.onerror = () => {
      // There was a connection error of some sort
      console.log('err');
    };
  
    request.send();
}

setInterval(() => {
    httpGet('/items', (res) => {
      document.querySelector('#items').innerHTML = '';
      const items = JSON.parse(res);
  
      Object.keys(items).reverse().forEach(key => {
        console.log(items[key]);
        document.querySelector('#items').innerHTML += `
          <div>
            <h3 style="margin-bottom: 5px">${items[key].Item}</h3>
            <hr>
          </div>
        `;
      });
    });
}, 0);