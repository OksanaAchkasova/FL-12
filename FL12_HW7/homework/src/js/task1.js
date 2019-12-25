let minMailLenght = 5,
    minPassLenght = 6,
    userLogin = false,
    currentUserEmail,
    currentUserPassword;
    
let usersAccounts = {
        'user@gmail.com': 'UserPass',
        'admin@gmail.com': 'AdminPass'
    };

currentUserEmail = prompt('Input your email'); 

if(currentUserEmail === '' || currentUserEmail === null) {
    alert('Canceled');
} else if(currentUserEmail.length < minMailLenght) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else {
    if(currentUserEmail in usersAccounts) {
        currentUserPassword = prompt('Input your password');
        if(currentUserPassword === '' || currentUserPassword === null) {
            alert('Canceled');
        } else if(currentUserEmail in usersAccounts && currentUserPassword === usersAccounts[currentUserEmail]) {
            userLogin = true;            
        } else {
            alert('Wrong password');
        }            
    } else {
        alert('I don’t know you'); 
    }    
}

if(userLogin) {
   if (!confirm('Do you want to change your password?')) {
        alert('You have failed the change.');
    } else {
        currentUserPassword = prompt('Input your old password');
        if(currentUserPassword === '' || currentUserPassword === null) {
            alert('Canceled');
        } else if(currentUserEmail in usersAccounts && currentUserPassword === usersAccounts[currentUserEmail]) {
                let newUserPassword = prompt('Input your new password');
                if(newUserPassword === '' || newUserPassword === null) {
                    alert('Canceled');
                } else if(newUserPassword.length < minPassLenght) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newUserPassword2 = prompt('Please input your new password again');
                    if(newUserPassword2 === newUserPassword) {
                        usersAccounts[currentUserEmail] = newUserPassword;
                        alert('You have successfully changed your password');                        
                    } else {
                       alert('You wrote the wrong password'); 
                    }
                }
        }
    }
}


    

