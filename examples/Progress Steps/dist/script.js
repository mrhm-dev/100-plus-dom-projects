const progressBar =
    document.querySelector('.progress-container').querySelector('.progress');
const btnPrev = document.getElementById('prev');
const btnNext = document.getElementById('next');
const circles = document.querySelectorAll('.circle');
let standard = 100 / (circles.length - 1);


let currAc = 1;
btnNext.onclick = function () {
    btnPrev.disabled = false;
    circles[currAc].classList.add('active');
    progressBar.style.width = standard * currAc + "%";
    btnNext.disabled =
        (currAc >= circles.length - 1) ? true : false;
    currAc++;
};

btnPrev.onclick = function () {
    btnNext.disabled = false;
    if (currAc > 1) {
        currAc--;
        circles[currAc].classList.remove('active');
        progressBar.style.width = standard * (currAc - 1) + '%';
        this.disabled = (currAc <= 1) ? true : false;
    }
};