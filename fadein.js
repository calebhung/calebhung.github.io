const faders=document.querySelectorAll('.fade-in');
const appearOptions ={
    threshold: 0.3,
    rootMargin: "0px 0px 0px 0px"
};
const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
entries.forEach(entry =>{
    if (!entry.isIntersecting){
        return;
    }
    else{
        console.log('intersect')
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
    }
})
}, appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
})


$(window).scroll(function() {
    // 100 = The point you would like to fade out the nav.
      
        if ($(window).scrollTop() > 300 ){
             $('.navigation li a').addClass('hide');
      } else {
        
        $('.navigation li a').removeClass('hide');
        
         };   	
    });
