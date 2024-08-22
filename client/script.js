document.querySelector(".page1").addEventListener("mousemove", function(dets){


    let mouseX = dets.clientX;
    let mouseY = dets.clientY;
    

    let xPos =   mouseX / window.innerWidth - .5;
    let yPos = mouseY / window.innerHeight - .5;

    // console.log(xPos,yPos);
    document.querySelectorAll(".page1 > .elem").forEach(box => {
        gsap.to(box,{
            x:xPos * 100,
            y:yPos * 100,
            duration:.5,
        })
    })

    
    

})