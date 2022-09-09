let note
let keys = document.querySelectorAll('.not');

keys.forEach(key => {
 key.addEventListener('mousedown', playNote);
});

keys.forEach(key => {
    key.addEventListener('mouseup', stopNote);
   });

function playNote(e) {
 let key = e.target;
 note = document.getElementById(key.dataset.note);
 key.classList.add('active');
 note.currentTime = 0;
 note.play();
 note.addEventListener('mouseup',() => {
  key.classList.remove('active');
  note.pause();
 });
}

function stopNote(e) {
     note.pause();
   }