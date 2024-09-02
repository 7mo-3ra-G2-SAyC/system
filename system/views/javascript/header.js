
const fetchApi = async(model, method, params)=>{
    var response = await fetch(`https://mattprofe.com.ar/alumno/3887/SAYC_2024/system/api/${model}/${method}/?${params}`);
    response = await response.json();
    return response;
}
