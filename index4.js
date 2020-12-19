if(localStorage.getItem("username")){
var url="https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users";
var res;
var search=$("#myInput");
var http=new XMLHttpRequest();
http.open("GET",url,true);
http.send();
http.onreadystatechange=function(){ 
    if(this.readyState==4){
        console.clear();
     res=JSON.parse(this.responseText);
        console.log(res);
    }
        console.log(res.length);
        for(var i=0;i<res.length;i++){
            var ape1=(dategeneration(res[i]));
            $("#table1 tbody").append(ape1);
        }




document.getElementById("reset").addEventListener("click",function(){ for(var i=0;i<res.length;i++){
    var ape1=(dategeneration(res[i]));
    $("#table1 tbody").append(ape1);
}

})
         search.on(
            "keydown",function(event){ 
              
                var keycode = (event.keyCode ? event.keyCode : event.which);
                if(keycode == '13'){
                    event.preventDefault();
         
    
                var input, filter, table, tr;
                
                input = document.getElementById("myInput");
               
                filter = input.value.toUpperCase();
                table = document.getElementById("table1");
                tr = table.getElementsByTagName("tr");
                var arr=input.value.split("");
                if(arr.length<2){
                   alert("enter atleast 2 characters")
                }
                
                
                else{
                    for (var i = 0; i < tr.length; i++) {
                        var td2 = tr[i].getElementsByTagName("td")[2];
                       
              
                        if (td2) {
                         
                          var txtValue2 = td2.textContent || td2.innerText
                         
                          if (txtValue2.toUpperCase().indexOf(filter) > -1) {
                            tr[i].style.display = "";
                           
                            
                          
                          } else {
                            tr[i].style.display = "none";
                           
                            
                          }
                        } 
                             
                      }
                }
               
               
               
                
            }}
        )
        
        





     }
 function dategeneration(obj){
   // <tr><th>ID</th><th>User Avatar</th><th>Full Name</th><th>DOB</th><th>Gender</th><th>Current Location</th>
     
     var row=document.createElement("tr");
     row.className="TableRow";
     row.id=obj.id;
     var td1=document.createElement("td");
     td1.className="SecondaryText";
     td1.innerText=obj.id;
     var td2=document.createElement("td");
     td2.className="PrimaryText";
     var i=document.createElement("img");
     i.src=obj.profilePic;
    td2.appendChild(i);
     var td3=document.createElement("td");
     td3.className="SecondaryText";
     td3.innerHTML=obj.fullName;
     var td4=document.createElement("td");
     td4.className="PrimaryText";
     td4.innerText=obj.dob;
     
     var td5=document.createElement("td");
     td5.className="SecondaryText";
     td5.innerText=obj.gender;
     var td6=document.createElement("td");
     td6.className="SecondaryText";
     td6.innerText=`${obj.currentCountry},${obj.currentCity}`;
     row.appendChild(td1);
     row.appendChild(td2);
     row.appendChild(td3);
     row.appendChild(td4);
     row.appendChild(td5);
     row.appendChild(td6);
 
    // console.log(row)
 return row;
 
 
     
 
 }}
else{
  console.log("check login first");
    window.location.href="https://acute-bloom-bongo.glitch.me/index.html"
}