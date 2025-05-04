let login = document.getElementById('login');
let signup = document.getElementById('signup')
let signup2 = document.getElementById('signup2');
let login2 = document.getElementById('login2');

function move_to_signup(){
    axios.get('/signup')
        .then(()=>{
            window.location.href = '/signup';
        }).catch(()=>{
            console.error('Request failed:', error);
        })
}
var move_to_login = ()=>{
    axios.get('/login')
        .then(()=>{
            window.location.href = '/login';
        }).catch((error)=>{
            console.error('Request failed:', error);
        })
}
login.addEventListener('click',(ev)=>{
    move_to_login()
})
signup.addEventListener('click',(ev)=>{
    console.log("clicked");
    move_to_signup();
})
signup2.addEventListener('click',()=>{
    let name = (document.getElementById('name')).value;
    let email = (document.getElementById('email')).value;
    let password = (document.getElementById('password')).value;
    axios.post('/signup',{
        name:name,
        email:email,
        password:password
    }).then(()=>{
        axios.get('/signup_success')
            .then(()=>{
                window.location.href = '/signup_success';
            }).catch((error)=>{
                console.error('Request failed:', error);
            })
    }).catch(()=>{
        console.error('Request failed:', error);
    })
    
})
/*login2.addEventListener('click',()=>{
    let email = (document.getElementById('email')).value;
    let password = (document.getElementById('password')).value;
    axios.post('/login')

})*/



