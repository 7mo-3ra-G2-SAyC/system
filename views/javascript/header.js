
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`./api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
