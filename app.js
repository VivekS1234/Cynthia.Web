var timeout;

var crsr = document.querySelector('.cursor')
var body = document.querySelector('body')

function crsrAnimation(){
    body.addEventListener('mouseenter', function(){
        crsr.style.scale = 1
        crsr.style.transitionDuration = "0.2s"
    })
    body.addEventListener('mouseleave', function(){
        crsr.style.scale = 0
    })
    document.addEventListener('mousemove', function(dets){
        crsr.style.left = dets.x + "px";
        crsr.style.top = dets.y + "px";
    })
}
crsrAnimation();

function crsrEffect(){
}
crsrEffect();