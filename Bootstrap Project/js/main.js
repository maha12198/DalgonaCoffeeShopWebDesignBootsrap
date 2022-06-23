import { API } from "./api.js";


function createPost(postData) {
    let html = `<div class="box" id="${postData.id}">
    <div class="image">
       <img src="${postData.image}" alt="">
    </div>
    <div class="content">
       <h3>${postData.title}</h3>
       <p>${postData.body}</p>
       <a href="#" class="link-btn">read more</a>
    </div>
    <div class="icons">
       <span> <i class="fas fa-calendar"></i> ${postData.time} </span>
       <span> <i class="fas fa-user"></i> by ${postData.publisher}  </span>
    </div>
 </div>`;
    return html;
}

function createMenueItem(itemData) {
    return `<div class="box">
    <img src="${itemData.image}" alt="">
    <h3>${itemData.name}</h3>
    <p>${itemData.description}</p>
    <a href="#" class="link-btn">read more</a>
 </div>`;
}
function createReview(reviewData) {
    return `<div class="box">
    <img src="${reviewData.image}" alt="">
    <h3>${reviewData.name}</h3>
    <p>${reviewData.feedback}</p>
    <div class="stars">
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star"></i>
       <i class="fas fa-star-half-alt"></i>
    </div>
 </div>`;
}

async function loadPosts() {
    const postsContainer = document.getElementById('posts-container');
    let posts = await API.getPosts();
    posts.forEach(postData => {
        postsContainer.innerHTML += createPost(postData);
    });
}
async function loadMenue() {
    const menueContainer = document.getElementById('menue-container');
    let meneueItems = await API.getMenue();
    meneueItems.forEach(itemData => {
        menueContainer.innerHTML += createMenueItem(itemData);
    });
}
async function loadReviews() {
    const reviewsContainer = document.getElementById('reviews-container');
    let reviews = await API.getReviews();
    reviews.forEach(reviewData => {
        reviewsContainer.innerHTML += createReview(reviewData);
    });
}




loadPosts();
loadMenue();
loadReviews();