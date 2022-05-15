fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(res => res.json())
    .then(data => {
        // throw Error("This is error");
        console.log(data.urls.regular);
        document.body.style.background  = `url(${data.urls.regular})`;
        document.getElementById('author').textContent = `By: ${data.user.username}`;
    })
    .catch(error => {
        document.body.style.background = `url('https://images.unsplash.com/photo-1444465693019-aa0b6392460d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTI2MTkyMTM&ixlib=rb-1.2.1&q=80&w=1080')`;
        // console.log(error);
    });