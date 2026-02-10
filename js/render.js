function renderBooks(){
const bookList=document.getElementById('bookList');
if(!bookList) return;
bookList.innerHTML="";
books.forEach(b=>{
bookList.innerHTML+=`
<div class="col-md-3">
<div class="card card-book p-3 mb-3">
<h6>${b.title}</h6>
<small>${b.author}</small>
</div>
</div>`;
});
}
