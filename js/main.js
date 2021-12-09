function regist()
{
  let name = document.getElementById('name').value;
  let password = document.getElementById('password').value;
  let password2 = document.getElementById('password2').value;
  if (localStorage.getItem(name)==null)
  {
    let new_user = 
    {
      user_name: name,
      user_password: password,
      user_password2: password2

    }
    if(name.length < 2 || name.length == null)
    {
      document.getElementById('error').textContent = "Ошибка: имя должно быть больше 2 символов"
    }else if(password.length < 8 || password.length == null)
    {
      document.getElementById('error').textContent = "Ошибка: пароль должен быть больше 8 символов"

    } else if (password != password2) 
    {
      document.getElementById('error').textContent = "Ошибка: пароли не совпадают"
    }else if(password==password2)
    {
    localStorage.setItem(new_user.user_name, JSON.stringify(new_user));
    localStorage.setItem("active_user", new_user.user_name)
    document.getElementById('active_name').textContent = localStorage['active_user']
    document.getElementById('error').textContent = "Успешно создан"
    }
  } else
  {
      document.getElementById('error').textContent = "Ошибка имя занято"
  }
}

function rem() {
  localStorage.removeItem('active_user')
  document.getElementById('active_name').textContent = "";

  document.getElementById("test3").style.display = 'none';
  document.getElementById("test").style.display = 'block';
  document.getElementById("test2").style.display = 'block';
}

var name = document.getElementById('name');
var pw = document.getElementById('password');

function store() {
    localStorage.setItem('name', name.value);
    localStorage.setItem('pw', password.value);
}

function login() {

    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');
        var userName = document.getElementById('username').value;
    var userPw = document.getElementById('userpw').value;

  if(userName.value == storedName || userPw.value == storedPw){
      let user_obj = localStorage.getItem(userName);
      let user = JSON.parse(user_obj)

      localStorage.setItem("active_user", userName)
      document.getElementById('error').textContent = "Добро пожаловать " + userName;
      document.getElementById('active_name').textContent = localStorage['active_user']
  }else{
    document.getElementById('error').textContent = "Ошибка пользователь не найден"
  }

}

window.onload = function(){
  let user_active= document.getElementById('active_name');
  if (user_active != null) 
  {
      document.getElementById("test").style.display = 'none';
      document.getElementById("test2").style.display = 'none';
      document.getElementById("test3").style.display = 'block';
    document.getElementById('active_name').textContent = localStorage['active_user'];
  }
  //  else {
  //       document.getElementById("test3").style.display = 'none';
  // document.getElementById("test").style.display = 'block';
  // document.getElementById("test2").style.display = 'block';
  // }
  
  
}

