let login = prompt('Please enter a login');
if(login === null || login === '' ){
  alert ('Canceled.');
} else if (login<4){
  alert("I don't know any users having name length less than 4 symbols");
} else if(login === 'User' || login === 'Admin'){
  let password = prompt('Please enter a password');
      if(password === null || password === ''){
        alert('Canceled.');
      } else if(login === 'User' && password === 'UserPass'){
        let userDate = new Date().getHours();
        if(userDate<20){
          alert('Good day, dear User!');
        } else{
 alert('Good evening, dear User!');
}
      }else if(login ==='Admin' && password === 'RootPass'){
        let adminDate = new Date().getHours();
        if(adminDate<20){
          alert('Good day, dear Admin!'); 
} else{
alert('Good evening, dear Admin!'); 
}
      } else{
 alert('Wrong password'); 
}
} else {
 alert('I don’t know you'); 
}