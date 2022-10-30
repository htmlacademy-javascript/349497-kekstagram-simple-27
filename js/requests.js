const getDataJson = (onSuccess, onFail, url) => {
  fetch(url)
    .then((response) => response.json())
    .then((json) => onSuccess(json))
    .catch(()=> onFail());
};

const sendData = (onSuccess, onFail, url, data) => {
  fetch(url, {method: 'POST', body: data})
    .then((response) => {
      if(response.ok){
        onSuccess();
      }else{
        onFail();
      }
    })
    .catch(()=> onFail());
};

export { getDataJson, sendData };
