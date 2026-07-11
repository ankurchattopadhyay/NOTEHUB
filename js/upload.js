const uploadBtn=document.getElementById("uploadFormBtn");

const uploadNowBtn=document.getElementById("uploadNowBtn");

const modal=document.getElementById("uploadModal");

const closeBtn=document.getElementById("closeUploadModal");
if (closeBtn) {
    closeBtn.onclick = closeModal;
}

function openModal(){

modal.classList.add("active");

document.body.style.overflow="hidden";

}

function closeModal(){

modal.classList.remove("active");

document.body.style.overflow="auto";

}

uploadBtn.onclick=(e)=>{

e.preventDefault();

openModal();

};

uploadNowBtn.onclick=(e)=>{

e.preventDefault();

openModal();

};

closeBtn.onclick=closeModal;

window.onclick=(e)=>{

if(e.target===modal){

closeModal();

}

};

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

closeModal();

}

});