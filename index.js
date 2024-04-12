let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let clickCount = 0;

menuIcon.onclick = () => {
    clickCount++;
    if (clickCount % 2 === 1) {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
        document.querySelector('.home').style.marginTop = '180px';
    } else {
        menuIcon.classList.toggle('fa-xmark');
        navbar.classList.toggle('active');
        document.querySelector('.home').style.marginTop = '0';
    }
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height)
        {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*sticky navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky' , window.scrollY > 100);

    /*remove toggle icon and navbar*/
    fa-xmark.addEventListener('click' , ()=>{
        document.querySelector('.home').style.marginTop = '0';
        menuIcon.classList.remove('fa-xmark');
    })
    // document.querySelector('.home').style.marginTop = '0';
    navbar.classList.remove('active');
}; 

/* scroll reveal*/
ScrollReveal(
    {
        distance: '80px',
        duration: 2000,
        delay: 200,
    }
);
ScrollReveal().reveal('.home-content, heading',{origin:'top'});
ScrollReveal().reveal('.home-img, services-container, .portfolio-box, .contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content',{origin:'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontent Developer', 'Web Designer'],
    typeSpeed:70,
    backSpeed:70,
    backDelay: 1000,
    loop:true,
});

function submitForm() {
    var frm = document.getElementsByName('contact-form')[0];
    frm.submit();
    frm.reset();
    return false;
    }

// const refreshpage=()=>{
//     location.reload();
// }
// document.addEventListener('click' ,()=>{
//          location.reload();
// })