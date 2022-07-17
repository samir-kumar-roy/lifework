const allReviews = document.querySelectorAll(".review");
const nextButton = document.querySelector(".next-button");
const prevButton = document.querySelector(".prev-button");
var flag = 0;
allReviews[flag].style.display = "block";
function changeReview(num) {
    if (num === 1) {
        flag = flag + num;

    }
    if (num === -1) {
        flag = flag - num;
    }
    if (flag === allReviews.length) {
        flag = 0;
    }

    for (let review of allReviews) {
        review.style.display = "none";
    }
    allReviews[flag].style.display = "block";
    allReviews[flag].gsap.fromTo({ x: "100%", opacity: 0 }, { x: 0, opacity: 1 });

}