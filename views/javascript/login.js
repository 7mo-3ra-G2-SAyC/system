
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`https://sayc-76fee51f670d.herokuapp.com/api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
const a = await fetchApi('cronograma','getByActivityId','id=1');
console.log(a);
console.log("hola")
