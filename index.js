

function submitdata (name,email){


fetch("http://localhost:3000/users", {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  

  //make sure to serialize your JSON body
  body: JSON.stringify({
    name: name,
    email: email
  })
})

.then(function (response)  { 
    return response.json();
})
.then(function (object) {
    console.log(object);
  })
.catch(function (error) {
    alert("Faulty data");
    console.log(error.message);
  });
  return submitdata;
}






