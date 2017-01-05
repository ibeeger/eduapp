const URL = "http://api.ibeeger.com/learnapi";


class Util {
    static  fetchData(postdata){
    	let url = postdata.hasOwnProperty("url") ? URL+postdata["url"] : URL+"/index";
    	let json = postdata.hasOwnProperty("json") ? postdata["json"] : {};
        return fetch(url,{
            method:'POST',
            headers:{
                  'Accept': 'application/json',
                  'Content-Type':'application/json'
            },
            body:JSON.stringify(json)
        }).then(function(response){
            return response.json();
        }).catch(function(err){
            console.log(err+"2");
            return null
        })
    }
}


export default Util