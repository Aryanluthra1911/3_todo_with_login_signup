let login = document.getElementById('login');
let signup = document.getElementById('signup')
let signup2 = document.getElementById('signup2');
let login2 = document.getElementById('login2');
let messagebox = document.getElementById('message')
let url = window.location.href

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

if (url === "http://localhost:4444/login") {
    login2.addEventListener('click',()=>{
        console.log('clicked')
        let email = (document.getElementById('email')).value;
        let password = (document.getElementById('password')).value;
        axios.post('/login',{
            email:email,
            password:password
        }).then((res)=>{
            if(!res.data.success){
                messagebox.innerText= res.data.message;
            }
            else{
                window.location.href = '/login_success';
            }
        }).catch((error)=>{
            console.error('Request failed:', error);
        })
    })
}

if (url === "http://localhost:4444/signup") {
    signup2.addEventListener('click',()=>{
        let name = (document.getElementById('name')).value;
        let email = (document.getElementById('email')).value;
        let password = (document.getElementById('password')).value;
        axios.post('/signup',{
            name:name,
            email:email,
            password:password
        }).then((res)=>{
            if(res.data.success){
                window.location.href = '/signup_success';
            }
            else {
                messagebox.innerText= 'Account already exists, Redirecting to Login...';
                setTimeout(()=>{
                    window.location.href = '/login';
                },3000)
            }
        }).catch((error)=>{
            console.error('Request failed:', error);
        })
    })

}

if(url === "http://localhost:4444/signup" || url ==="http://localhost:4444/login"){
    login.addEventListener('click',(ev)=>{
        move_to_login()
    })
    signup.addEventListener('click',(ev)=>{
        console.log("clicked");
        move_to_signup();
    })
}

