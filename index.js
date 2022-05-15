fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.small);
        document.body.style.background  = `url(${data.urls.full})`;
    });