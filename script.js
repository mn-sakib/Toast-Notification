let toastBox = document.getElementById('toast');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Successfully Submitted!';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Request invalid!';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Requested access denied!';

function showToast(msg){
    let toast = document.createElement('div');
    toast.classList.add('show-toast');
    toast.innerHTML = msg;
    toast.classList.add('show')
    toastBox.appendChild(toast);
    
    if(msg.includes('invalid')){
        toast.classList.add('invalid')
    }
    if(msg.includes('denied')){
        toast.classList.add('error')
    } 
    setTimeout(() => {
        toast.remove()
    }, 3000)
}