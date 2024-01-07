const showHiddenPass = (LoginPass , LoginEye) =>{
    const input =document.getElementById(LoginPass),
    iconEye = document.getElementById(LoginEye)
    iconEye.addEventListener('click', () =>{
        // chang password to text
if(input.type === 'password'){
    // switch to text 
    input.type = 'text',
    // icon change
    iconEye.classList.remove('fa-solid fa-eye'),
    iconEye.classList.add('fa-solid fa-eye')
}
    } )

}
showHiddenPass ('login__password','log__eye')