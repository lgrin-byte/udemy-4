fetch('https://api.unsplash.com/photos/random?client_id=WeCKXhYiDfnnvQaMxyGtQasudzV8lUBLyxWLfA3fHbc')
  .then(res => res.json())
  .then(data => {
    const bgImage = document.createElement('img');
    bgImage.src = data.urls.full;

    document.body.appendChild(bgImage);
  });