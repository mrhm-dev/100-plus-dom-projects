

//variable global variable
let addBtn = document.querySelector('#addNoteBtn');

let deleteBtn = document.querySelector('#deleteNoteBtn'); 

//fetching last notes
showNotes();

//events lister
addBtn.addEventListener('click', addLocalNotes);



//functions

//saves notes to local storage
function addLocalNotes() {
      let myNotes = document.querySelector('#textArea'); 
      let myTitles = document.querySelector('#NoteTitle'); 


      //getting all saves data from local storage and make input data to an object and add them to local storage
      let localTitles = localStorage.getItem('appData');
      let appData;
      if (localTitles == null  ) {
            appData = [];
      } else {
            appData = JSON.parse(localTitles);
      }
      let allData = {
            title: myTitles.value,
            notes: myNotes.value
      }
      //checking is input filed is empty?
      if (myTitles.value.length != 0 && myNotes.value.length != 0) {
      
            appData.push(allData);
      }
      else{
            alert('please enter Titles !');
            return;
      }

      localStorage.setItem('appData', JSON.stringify(appData));

      myTitles.value = '';
      myNotes.value = '';

      showNotes();
}

//deleting notes from local storage
function deleteLocalNotes(index) {
      let localNotes;
      let Storage = localStorage.getItem('appData');
      if (Storage == null) {
            localNotes = [];
      } else {
            localNotes = JSON.parse(Storage);
      }
      localNotes.splice(index, 1);
      localStorage.setItem('appData', JSON.stringify(localNotes));
      showNotes();
}

//update our notes body to show notes
function showNotes() {
      let NotesBody  = document.querySelector('#notesBody');
      let localNotes;
      let Storage = localStorage.getItem('appData');
      if (Storage == null) {
            localNotes = [];
      } else {
            localNotes = JSON.parse(Storage);
      }
      let html = '';
     localNotes.forEach((element, index) => {
           html += `
           <div class="card Notes mx-3 my-2"  style="width: 300px;">
                  <div class="card-body ">
                        <h5 class="card-title text-capitalize">${index+1}. ${element.title}</h5>
                        <p class="card-text">${element.notes}</p>
                        <button onclick="deleteLocalNotes(${index})" class="btn btn-danger text-capitalize">delete notes</button>
                  </div>
            </div>
           `;
     });
     if (localNotes.length != 0) {
      NotesBody.innerHTML = html;
     } else {
      NotesBody.innerHTML = "<h6 class='text-muted my-2 mx-3 text-center' >Nothing to show!! use 'Add Notes' button to add something </h6>"
     }
    
}


//search notes in body and make visible to users
let search = document.getElementById('searchBtn');

search.addEventListener('input', () => {
      let sText = search.value;
      let  allNote = document.getElementsByClassName('Notes');
      Array.from(allNote).forEach((element) => {
           let noteText = element.querySelector('p.card-text');
           let noteTitle = element.querySelector('h5.card-title');

           if (noteText.innerText.toLowerCase().includes(sText.toLowerCase()) || noteTitle.innerText.toLowerCase().includes(sText.toLowerCase())) {
                  element.style.display = 'block';
           }else{
                  element.style.display = 'none';
           }
      
      })
})



//Theme selection
let themeSelection = document.getElementById('themeSelection');
//need this bellow variable to select element as active
let defaultTheme = document.getElementById('Notheme');
let darkTheme = document.getElementById('Darktheme');
let lightTheme = document.getElementById('Ligththeme');

themeSelection.addEventListener('click', (e) => {
      //removing active class (blue background) from all theme option
     let allElements = themeSelection.children;
     Array.from(allElements).forEach((e) => {
           e.classList.remove('active')
           
     })
     
     //add class to body that change the theme (custom css required) and add active class 
      let clicked = e.target.id;
     switch(clicked){
      case 'Notheme' : 
            document.body.className = '';
            defaultTheme.classList.add('active');
      break;
      case 'Darktheme' : 
            document.body.className = 'dark';
            darkTheme.classList.add('active');
      break;
      case 'Ligththeme' : 
            document.body.className = 'light';
            lightTheme.classList.add('active');
      break;
     }

     
})



