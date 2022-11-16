window.onload= function(){

    var search=document.getElementById('lookup');
    var httprequest=new XMLHttpRequest();
    var response=document.getElementById('result');
    var country=document.getElementById('country');
    var url="world.php?country="+country.value;
    
    search.addEventListener('click',function(event){
        event.preventDefault();
        httprequest.onreadystatechange=request;
        httprequest.open('GET',url,true);
        httprequest.send(); 
    });

    function request(){
        if(httprequest.readyState===XMLHttpRequest.DONE){
            if (httprequest.status===200){
                response.innerHTML=httprequest.responseText;
            }
            else{
                response.innerHTML="Error. There was a problem with the request";
            }
        }
    }
} 