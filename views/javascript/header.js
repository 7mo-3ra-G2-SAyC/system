
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`sayc-76fee51f670d.herokuapp.com/api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
