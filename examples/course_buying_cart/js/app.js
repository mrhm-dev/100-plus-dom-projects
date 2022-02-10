//variable
courses = document.querySelector("#courses-list");
const shopingCart = document.querySelector("#shopping-cart tbody");
const clearCourse = document.querySelector("#clear-cart");



//listeners
loadeventListeners();
function loadeventListeners() {
    courses.addEventListener('click', buyCourse);
    shopingCart.addEventListener('click', removeCourse);
    clearCourse.addEventListener('click', removeAllCourse);
    document.addEventListener("DOMContentLoaded", localStorageLoaded)
}


//function

function buyCourse(e) {
    e.preventDefault();
    if (e.target.classList.contains('add-to-cart')) {
        const course = e.target.parentElement.parentElement;

        getCourseInfo(course);
    }
}
    
    function getCourseInfo(course) {
        const courseInfo = {
            image : course.querySelector("img").src,
            title : course.querySelector('h4').textContent,
            price : course.querySelector(".price span").textContent,
            id : course.querySelector("a").getAttribute("data-id")
        };
        addToCart(courseInfo);
    }

    function addToCart(course) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <tr>
             <td>
                <img src="${course.image}" width="120">       
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td><a href="#" class="remove" data-id="${course.id}">X</a></td>
            </tr>
        `;
        shopingCart.appendChild(row);
        
        saveCourseLocalStorage(course);
    }
    
    function saveCourseLocalStorage(course) {
        const courses = getCourseLocalStorage();

        courses.push(course);

        localStorage.setItem("courses", JSON.stringify(courses));
    }

    function getCourseLocalStorage() {
        let courses;
        const coursejson = localStorage.getItem("courses");
        if(coursejson === null){
            courses = [];
        }
        else {
            courses = JSON.parse(coursejson);
        }
        return courses;
    }

    function localStorageLoaded() {
        const courses = getCourseLocalStorage();

        courses.forEach(function (course) {
            const row = document.createElement("tr");
            row.innerHTML = `
            <tr>
             <td>
                <img src="${course.image}" width="100">       
            </td>
            <td>${course.title}</td>
            <td>${course.price}</td>
            <td><a href="#" class="remove" data-id="${course.id}">X</a></td>
            </tr>
        `;
            shopingCart.appendChild(row);
        })
    }

    function removeCourse(e) {
        let course, courseId;
        // remove from shopping cart
        if(e.target.classList.contains('remove')){
            e.target.parentElement.parentElement.remove();
            course = e.target.parentElement.parentElement;
            // take remover id
            courseId = course.querySelector("a").getAttribute('data-id');
        }
        console.log(courseId);
        // remove from localStorage
        removeCourselocalStorage(courseId);
    }

    function removeCourselocalStorage(id) {
        let courses = getCourseLocalStorage();

        courses.forEach(function (course, index) {
            if( course.id === id){
                courses.splice(index, 1)
            }
        });

        localStorage.setItem("courses", JSON.stringify(courses));
    }

    function removeAllCourse(e) {
       // shopingCart.innerHTML = '';

        while (shopingCart.firstChild){
            shopingCart.removeChild(shopingCart.firstChild);
        }

        //clear localStorage
        clearlocalStorage();
    }
    function clearlocalStorage() {
        localStorage.clear();
    }




