const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
menu.addEventListener('click',function(){
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
    
})

function showForm(formId){
    document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}
function toggleLoginDropdown() {
    const dropdown = document.getElementById('login-form-dropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

