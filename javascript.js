console.log('Are This in running')
document.querySelector('.fa-sharp').style.display='none';
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    document.querySelector('.sidebar').classList.contains('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
    document.querySelector('.fa-solid').style.display='inline'
    document.querySelector('.fa-sharp').style.display='block';
}
else{
    document.querySelector('.fa-sharp').style.display='inline';
    document.querySelector('.fa-solid').style.display='block';
    
    }
})