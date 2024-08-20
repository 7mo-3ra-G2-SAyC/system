
const fetchApi = async(agent,option, method = "GET")=>{
    var response = await fetch(`models/SaycApi.php?agent=${agent}&option=${option}`, {method: `${method}`});
    response = await response.json();
    return response;
}