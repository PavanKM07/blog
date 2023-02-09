const blogTitleField = document.querySelector(".title");
const articleField = document.querySelector(".article");

const bannerImage = document.querySelector("#banner-upload");
const banner = document.querySelector(".banner");


let bannerPath;

const publishBtn = document.querySelector(".publish-btn")
const uploadInput = document.querySelector("#image-upload");



bannerImage.addEventListener("change",()=>{
uploadImage(bannerImage,"banner");}


)

const uploadImage =(uploadFile, uploadType)=>
{
const [file] = uploadFile.files;

}