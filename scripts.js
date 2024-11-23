document.addEventListener("DOMContentLoaded", ()=>{
    // variable to contain ID element
    const firstName = document.getElementById('firstname');
    const lastName = document.getElementById('lastname');
    const userName = document.getElementById('username');
    const button = document.getElementById('button');
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modaltext');

//event listener to collect value on click of the button
button.addEventListener('click', ()=> {
    //variable to hold the value of the input
    const username = userName.value;
    const firstname = firstName.value;
    const lastname = lastName.value;

    modal.style.display = "block";// display modal div
    modalText.textContent = `first name: ${firstname}, last name: ${lastname}, user name: ${username}`; // display input value
    //console.log();
})

})