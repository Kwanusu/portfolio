
    const tabLinks = document.getElementsByClassName("tab-links");
    const tabContents = document.getElementsByClassName("tab-contents");

    function openTab(tabName){
        for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }

        for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabName).classList.add("active-tab")
    } 
    let sideMenu = document.getElementById("side-menu");
    function openMenu(){
        sideMenu.style.right ="0";
}
    function closeMenu(){
        sideMenu.style.right ="-200px";
}
    const scriptURL = 'https://script.google.com/macros/s/'
    const form =documents.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(_response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
              msg.innerHTML = ""  
            },5000)
            form.reset()
        })
        form.reset()
        .catch(error => console.error('Error!', error.message))
    })

    const header = document.querySelector('.header')
    const scrollWatcher = document.createElement('div');

    scrollWatcher.setAttribute('data-scroll-watcher', '')
    header.before(scrollWatcher);

    const navObserver = new IntersectionObserver((entries) => {
        header.classList.toggle('sticking',!entries[0]).isIntersecting}, {rootMargin: "200px 0px 0px 0px"
    });

    navObserver.observe(scrollWatcher)
