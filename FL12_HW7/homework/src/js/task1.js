const MIN_MAIL_LENGHT = 5,
    MIN_PASS_LENGTH = 6;

let userLogin = false,
    usersAccounts = {
        'user@gmail.com': 'UserPass',
        'admin@gmail.com': 'AdminPass'
    };

let currentUserEmail = prompt('Input your email'); 
if(currentUserEmail === '' || currentUserEmail === null) {
    alert('Canceled');
} else if(currentUserEmail.length < MIN_MAIL_LENGHT) {
    alert('I don\'t know any emails having name length less than 5 symbols');
} else {
    if(currentUserEmail in usersAccounts) {
        let currentUserPassword = prompt('Input your password');
        if(currentUserPassword === '' || currentUserPassword === null) {
            alert('Canceled');
        } else if(currentUserPassword === usersAccounts[currentUserEmail]) {
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
        let currentUserPassword = prompt('Input your old password');
        if(currentUserPassword === '' || currentUserPassword === null) {
            alert('Canceled');
        } else if(currentUserPassword === usersAccounts[currentUserEmail]) {
                let newUserPassword = prompt('Input your new password');
                if(newUserPassword === '' || newUserPassword === null) {
                    alert('Canceled');
                } else if(newUserPassword.length < MIN_PASS_LENGTH) {
                    alert('It’s too short password. Sorry.');
                } else {
                    let newUserPassword2 = prompt('Please input your new password again');
                    if(newUserPassword2 === '' || newUserPassword2 === null) {
                        alert('Canceled');
                    } else if(newUserPassword2 === newUserPassword) {
                            alert('You have successfully changed your password');                        
                    } else {
                        alert('You wrote the wrong password'); 
                    }                   
                }
        } else {
            alert('Wrong password');
        }
    }
}


    

