const sections = document.querySelectorAll("section");

sections.foreach({section} => {
   
    gsap.formTo(
        section,
        {
            backgroundPositionY:`-${windows.innerHeight / 2}px`
        },
        {
            backgroundPositionY:`-${windows.innerHeight / 2}px`
        }
       
    })
}
    
})