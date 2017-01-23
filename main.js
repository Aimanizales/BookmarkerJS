//Listen for Form submit
document.getElementById('myForm').addEventListener('submit', validateForm);

function validateForm(event){
  var bookmark = {
    name: document.getElementById('site-name').value,
    url: document.getElementById('site-url').value
  };
  saveBookmark(bookmark);
  event.preventDefault();
}

function saveBookmark(bookmark) {
  var bookmarks = [];
  if(localStorage.getItem('bookmarks') != null){
    bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  }
  bookmarks.push(bookmark);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  fetchBookmarks();
}

function fetchBookmarks() {
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks')),
    bookmarksResults = document.getElementById('bookmarks-results');
  bookmarksResults.innerHTML = '';
  for (var i = 0; i < bookmarks.length; i++) {
    bookmarksResults.innerHTML += '<div class="well well-sm">'+ (i+1) + ' <a href="' + bookmarks[i].url + '" target"_blank">' +bookmarks[i].name + '</a></div>';
  }
}