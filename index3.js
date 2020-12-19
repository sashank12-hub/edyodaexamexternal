if(localStorage.getItem("username")){
var orderList= [];
var CurrentDate = new Date();
var filteredList= [];
var tableRows=[];
var count=100;
var check1=document.getElementById("expired");
//check1.checked=true;
var check2=document.getElementById("lowstock");
//check2.checked=true;




$.get("https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products",function(res){
   console.log(res);
    orderList=res;
    filteredList=res;
    console.log(res.length);
    for(var i=0;i<filteredList.length;i++){
        


        var ape1=(dategeneration(filteredList[i]));
        $(".table1 tbody").append(ape1);



        
    }//arr1 is expired and low stock
var arr1=filteredList.filter((item)=>{
var GivenDate = new Date(item.expiryDate);

        return ((item.stock<100) && ((GivenDate < CurrentDate)));
    })
//arr low stcok and not expired
var arr=filteredList.filter((item)=>{var GivenDate = new Date(item.expiryDate);
 
return( (GivenDate > CurrentDate)&&( item.stock<100)) ;})
//high stock and expired
var arr3=filteredList.filter((item)=>{
    var GivenDate = new Date(item.expiryDate);
    
            return ((item.stock>100) && ((GivenDate < CurrentDate)));
        })
    //hight stcok and not expires
    var arr4=filteredList.filter((item)=>{var GivenDate = new Date(item.expiryDate);
     
    return( (GivenDate > CurrentDate)&&( item.stock>100)) ;})

        console.log("arr" + arr.length);
        console.log("arr1" + arr1.length);
var check1=document.getElementById("expired");
var check2=document.getElementById("lowstock");
check1.addEventListener("click",function(){
document.getElementById("tt").innerHTML = "";
console.log(arr1.length);

if(check1.checked ==true && check2.checked==true){
$("#filteroptions p").innerHTML=`count:${arr1.length}`
for(var i=0;i<arr1.length;i++){
var ape1=(dategeneration(arr1[i]));
document.getElementById("tt").append(ape1) ;
    }}
if(check1.checked ==true && check2.checked==false){
        $("#filteroptions p").innerHTML=`count:${arr3.length}`
        for(var i=0;i<arr3.length;i++){
        var ape1=(dategeneration(arr3[i]));
        document.getElementById("tt").append(ape1) ;
            }}
        if(check1.checked ==false && check2.checked==false){
                $("#filteroptions p").innerHTML=`count:${arr4.length}`
                for(var i=0;i<arr4.length;i++){
                var ape1=(dategeneration(arr4[i]));
                document.getElementById("tt").append(ape1) ;
                    }}
                    if(check1.checked ==false && check2.checked==true){
                        $("#filteroptions p").innerHTML=`count:${arr3.length}`
                        for(var i=0;i<arr3.length;i++){
                        var ape1=(dategeneration(arr3[i]));
                        document.getElementById("tt").append(ape1) ;
                            }}

        
           



})
check2.addEventListener("click",function(){
    document.getElementById("tt").innerHTML = "";
    console.log(arr1.length);
    
    if(check1.checked ==true && check2.checked==true){
    $("#filteroptions p").innerHTML=`count:${arr1.length+arr.length}`
    for(var i=0;i<arr1.length;i++){
    var ape1=(dategeneration(arr1[i]));
    document.getElementById("tt").append(ape1) ;
        }}
    if(check1.checked ==true && check2.checked==false){
            $("#filteroptions p").innerHTML=`count:${arr1.length+arr.length}`
            for(var i=0;i<arr3.length;i++){
            var ape1=(dategeneration(arr3[i]));
            document.getElementById("tt").append(ape1) ;
                }}
            if(check1.checked ==false && check2.checked==false){
                    $("#filteroptions p").innerHTML=`count:${arr1.length+arr.length}`
                    for(var i=0;i<arr4.length;i++){
                    var ape1=(dategeneration(arr4[i]));
                    document.getElementById("tt").append(ape1) ;
                        }}
                        if(check1.checked ==false && check2.checked==true){
                            $("#filteroptions p").innerHTML=`count:${arr1.length+arr.length}`
                            for(var i=0;i<arr3.length;i++){
                            var ape1=(dategeneration(arr3[i]));
                            document.getElementById("tt").append(ape1) ;
                                }}
    
            
               
    
    
    
    })


})
function dategeneration(obj){
    
    
    var row=document.createElement("tr");
    row.className="TableRow";
    row.id=obj.id;
    var td1=document.createElement("td");
    td1.className="SecondaryText";
    td1.innerText=obj.id;
    var td2=document.createElement("td");
    td2.className="PrimaryText";
    td2.innerText=obj.medicineName;
    var td3=document.createElement("td");
    td3.className="SecondaryText";
    td3.innerHTML=obj.medicineBrand;
    var td4=document.createElement("td");
    td4.className="PrimaryText";
    td4.innerText=obj.expiryDate;
    
    var td5=document.createElement("td");
    td5.className="SecondaryText";
    td5.innerText=obj.unitPrice;
    var td6=document.createElement("td");
    td6.className="SecondaryText";
    td6.innerText=obj.stock;
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