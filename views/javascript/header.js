
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`https://mattprofe.com.ar/alumno/6818/sayc/api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
