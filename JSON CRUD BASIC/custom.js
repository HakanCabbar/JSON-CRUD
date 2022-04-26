
  const table = document.getElementById("userTable");
function getUserList(){

    


    fetch("https://reqres.in/api/users")
    .then (response=>response.json())
    .then(data=>{

        
        for(user of data.data)
        {
            
            table.innerHTML+= `<tr>
            <td> <input type="text" class="form-control" id="first_name_${user.id}" value="${user.first_name}"></td>
            <td> <input type="text" class="form-control" id="last_name_${user.id}" value="${user.last_name}"></td>
            <td> <input type="text" class="form-control" id="email_${user.id}" value="${user.email}"></td>
            <td>
              <a href=""  class="btn btn-warning" onclick = 'updateUser(${user.id})'>Güncelle</a>
              <a href=""  class="btn btn-danger" onclick = deleteUser(${user.id}) >Sil</a>
            </td>
           </tr> `
        }


    })


}

getUserList()

function refreshTable(){

    getUserList()
}

function createUser(){
   let data= {
   first_name:document.getElementById("first_name").value || "boş",
   last_name:document.getElementById("last_name").value || "boş",
   email:document.getElementById("email").value || "boş",


   };
   fetch("https://reqres.in/api/users",{
       
    method: "POST",
    headers :{
        'Content-type': 'application/json'
    },

    body: JSON.stringify(data)
 
}) 
  .then(response=>response.json())
  .then(data=>{

  

    table.innerHTML+= `<tr>
    <td> <input type="text" class="form-control" id="" value="${data.first_name}"></td>
    <td> <input type="text" class="form-control" id="" value="${data.last_name}"></td>
    <td> <input type="text" class="form-control" id="" value="${data.email}"></td>
    <td>
      <a href=""  class="btn btn-warning" onclick = "updateUser(${data.id})">Güncelle</a>
      <a href=""  class="btn btn-danger" onclick = deleteUser(${data.id}) >Sil</a>
    </td>
   </tr> `
  })

  .catch((error)=>{

    console.log("hata",error);
  })
}

function updateUser(id){

    console.log(id)

    let data={
        first_name:document.getElementById("first_name_"+id).value || "geçersiz değer",
        last_name:document.getElementById("last_name_"+id).value || "geçersiz değer",
        email:document.getElementById("email_"+id).value || "geçersiz değer"
    }

    console.log(data)

    fetch("https://reqres.in/api/users",{

        method: "PUT",
        headers :{
            'Content-type': 'application/json'
        },
    
        body :JSON.stringify(data)
    })

    .then(response=>response.json())
    .then(veri=>console.log("kullanıcı güncellendi",veri))
    .catch((error)=>console.log(error))
 


}


function deleteUser(id){
    console.log(id)

    fetch("https://reqres.in/api/users"+id  ,{

        method: "DELETE",
        headers :{
            'Content-type': 'application/json'
        },
    
      
    })
    .then(response=>console.log(response))
    .then(data=>{

        console.log("kullanıcı sildik",data)
    })



}