if(localStorage.getItem("username")){

var orderList= [];
var filteredList= [];
var tableRows=[];
var showNew= true;
var showPacked= true;
var showInTransit= true;
var showDelivered= true;

var check1=document.getElementById("new");
var check2=document.getElementById("packed");
var check3=document.getElementById("InTransit");
var check4=document.getElementById("Delivered");

$.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders",function(res){
   
    orderList=res;
    filteredList=res;
    console.log(res.length)
    for(var i=0;i<filteredList.length;i++){

        var ape1=(dategeneration(filteredList[i]));
        $(".table1 tbody").append(ape1);
}
var arr1=filteredList.filter((item)=>{
    item.orderStatus=="Delivered"
})
var arr2=filteredList.filter((item)=>{
    item.orderStatus="New";

})
var arr3=filteredList.filter((item)=>{
    item.orderStatus="InTransit";

})
var arr4=filteredList.filter((item)=>{
    item.orderStatus="Packed";

})

check1.addEventListener("click",function(){
   var r=[];
   r= checking();
   for(var i=0;i<r.length;i++){
    document.getElementById("tt").appendChild( dategeneration(r[i]))
   }
})
check2.addEventListener("click",function(){
    var r=[];
    r= checking();
    for(var i=0;i<r.length;i++){
     document.getElementById("tt").appendChild( dategeneration(r[i]))
    }
});
check3.addEventListener("click",function(){
    var r=[];
    r= checking();
    for(var i=0;i<r.length;i++){
     document.getElementById("tt").appendChild( dategeneration(r[i]))
    }
})
check4.addEventListener("click",function(){
    var r=[];
    r= checking();
    for(var i=0;i<r.length;i++){
     document.getElementById("tt").appendChild( dategeneration(r[i]))
    }
})
   

function checking(){
    document.getElementById("tt").innerHTML="";
    if(check1.checked==true &&check2.checked==true && check3.checked ==true&& check4.checked ==true){
        var array=[...arr1,...arr2,...arr3,...arr4];
        return array;
        

    }
    if(check1.checked==false &&check2.checked==true && check3.checked ==true&& check4.checked ==true){
        var array=[...arr2,...arr3,...arr4];
        return array;
    }
    if(check1.checked==true &&check2.checked==true && check3.checked ==true&& check4.checked ==false){
        var array=[...arr2,...arr3,...arr1];
        return array;
    }
    if(check1.checked==true &&check2.checked==true && check3.checked ==false&& check4.checked ==true){
        var array=[...arr2,...arr1,...arr4];
        return array;
    }
    if(check1.checked==true &&check2.checked==false && check3.checked ==true&& check4.checked ==true){
        var array=[...arr1,...arr3,...arr4];
        return array;
    }
    if(check1.checked==true&&check2.checked==true && check3.checked ==false&& check4.checked ==true){
        var array=[...arr1,...arr2,...arr4];
        return array;
    }
    if(check1.checked==true&&check2.checked==false && check3.checked ==true&& check4.checked ==true){
        var array=[...arr3,...arr1,...arr4];
        return array;
    }
    
    if(check1.checked==true &&check2.checked==true && check3.checked ==false&& check4.checked ==false){
        var array=[...arr1,...arr2];
        return array;
    }
    if(check1.checked==false &&check2.checked==false && check3.checked ==true&& check4.checked ==true){
        var array=[...arr3,...arr4];
        return array;
    }
    if(check1.checked==true &&check2.checked==false && check3.checked ==true&& check4.checked ==false){
        var array=[...arr1,...arr3];
        return array;
    }
    if(check1.checked==true &&check2.checked==false && check3.checked ==false&& check4.checked ==true){
        var array=[...arr1,...arr4];
        return array;
    }
    if(check1.checked==false &&check2.checked==true&& check3.checked ==true&& check4.checked ==false){
        var array=[...arr2,...arr3];
        return array;
    }
    if(check1.checked==false &&check2.checked==false && check3.checked ==true&& check4.checked ==true){
        var array=[...arr2,...arr4];
        return array;
    }
    
    if(check1.checked==false &&check2.checked==false && check3.checked ==false&& check4.checked ==true){
        var array=[...arr4];
        return array;
    }
    if(check1.checked==true &&check2.checked==false && check3.checked ==false&& check4.checked ==false){
        var array=[...arr1];
        return array;
    }
    if(check1.checked==false &&check2.checked==true && check3.checked ==false&& check4.checked ==false){
        var array=[...arr2];
        return array;
    }
    if(check1.checked==false &&check2.checked==false && check3.checked ==true&& check4.checked ==false){
        var array=[...arr3];
        return array;
    }

}













function dategeneration(obj){
    
    const day = obj.orderDate.split('-')[0];
    const month = obj.orderDate.split('-')[1];
    const year = obj.orderDate.split('-')[2];
    var row=document.createElement("tr");
    row.className="TableRow";
    row.id=obj.id;
    var td1=document.createElement("td");
    td1.className="SecondaryText";
    td1.innerText=obj.id;
    var td2=document.createElement("td");
    td2.className="PrimaryText";
    td2.innerText=obj.customerName;
    var td3=document.createElement("td");
    td3.className="PrimaryText";
    td3.innerHTML=`${day} ${month}, ${year} <br> <span class="SecondaryText">${obj.orderTime}</span>`;
    var td4=document.createElement("td");
    td4.className="SecondaryText";
    td4.innerText=obj.amount;
    var td5=document.createElement("td");
    td5.className="PrimaryText";
    td5.innerText=obj.orderStatus;
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);
    row.appendChild(td5);
   // console.log(row)
return row;


    

}
});
}
else{
  console.log("check login first");
    window.location.href="https://acute-bloom-bongo.glitch.me/index.html"
}