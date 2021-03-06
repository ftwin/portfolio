//smooth scroll

const scroll = function(e){

    document.getElementById(e.target.getAttribute('href').replace("#", "")).scrollIntoView({
        behavior: 'smooth'
    });
    setTimeout(function () {
         window.location.assign(e.target)
        }, 300);

}

const anchors = document.getElementsByTagName("a");

for (let i = 0, length = anchors.length; i < length; i++) {
    let anchor = anchors[i];
    
    anchor.addEventListener('click', function (e) {
        if (anchor.hash.includes('#')) {
            e.preventDefault()
            scroll(e)
        }
    });
};

