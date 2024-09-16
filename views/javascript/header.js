
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`http://localhost/api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
