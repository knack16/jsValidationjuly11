
const email = document.getElementById('email');
const password = document.getElementById('password');

const checkemailid=localStorage.getItem("email")
console.log(checkemailid);
const passwordcheck=localStorage.getItem("password");
console.log(passwordcheck);


//display eror msg and class
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//display suucess and add success class 
function showSuccess(input) {
  formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//check email
function checkEmail(input) {
  const re = /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'Email is not valid');
    return false;
  }
}


//check password
function checkPassword(input) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{2,15}$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
    return true;
  } else {
    showError(input, 'invalid password use Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte');
    return false;
    
  }
}

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      return false;
    } else {
      showSuccess(input);
      return true;
    }
  });
}

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function avoidSpace(event){
  var k = event ? event.which : window.event.keyCode;
  if (k==32) return false;
}

function validate(){
  checkRequired([email, password]);
  checkEmail(email);
  checkPassword(password);
}

function isFormValid() {
    const inputContainers = form.querySelectorAll(".form-control");
    let result = true;
    inputContainers.forEach((container) => {
      if (container.classList.contains("error")) {
        result = false;
      }
    });
    return result;
  }

// Event listeners
form.addEventListener('submit', function (e) {
    validate();
    if (isFormValid() == true) {
      form.submit();
    } else {
      e.preventDefault();
    }
  });