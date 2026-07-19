// ============================================
// LE TUE OPERE: per aggiungere o togliere un'opera,
// modifica solo questa lista. Ogni riga e':
//   { file: "nome-file.jpg", title: "Titolo che vuoi mostrare" }
// Il file deve trovarsi dentro assets/works/
// Ricordati di mettere la virgola alla fine di ogni riga, tranne l'ultima.
// ============================================
var works = [
  { file: "dino.jpeg", title: "Dino" },
  { file: "elephant.jpeg", title: "Elephant" },
];

// Genera automaticamente le card HTML a partire dalla lista "works"
var renderWorks = function () {
  var container = document.getElementById('works-container');
  var html = '';
  for (var i = 0; i < works.length; i++) {
    var work = works[i];
    html += ''
      + '<div class="max-w-sm md:max-w-md overflow-hidden border border-gray-400 rounded-b m-2 hover:shadow-xl hover:underline image-card">'
      +   '<div>'
      +     '<img class="w-full" src="assets/works/' + work.file + '" alt="image" />'
      +     '<div class="w-full px-6 py-4 text-center">'
      +       '<p class="font-bold text-base">' + work.title + '</p>'
      +     '</div>'
      +   '</div>'
      + '</div>';
  }
  container.innerHTML = html;
};

// ============================================
// Da qui in poi: funzioni originali del template,
// non serve modificarle.
// ============================================
var toggleTheme = function () {
  document.body.classList.toggle('dark');
  localStorage.setItem('dark-theme', document.body.classList.contains('dark'));
};
var toggleLightroom = function (event) {
  if (event.target.className === 'lightroom') {
    event.target.classList.remove('lightroom');
    return;
  }
  if (!event.target.parentElement.parentElement.classList.contains('image-card')) {
    return;
  }
  if (!event.target.parentElement.classList.contains('lightroom')) {
    event.target.parentElement.classList.add('lightroom');
    return;
  }
};

renderWorks();

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
document.getElementById('works').addEventListener('click', function(event) { toggleLightroom(event); });

if (JSON.parse(localStorage.getItem('dark-theme'))) {
  document.body.classList.add('dark');
}
