const d = document;

export default function navActive(){

    const $sections = d.querySelectorAll("section[data-scroll-spy]");
    const cb= (entries) => {
        // console.log(entries)

        entries.forEach(entry =>{
            // console.log(entry)

            const id = entry.target.getAttribute("id");
            if(entry.isIntersecting){
                d.querySelector(`.panel__a[data-scroll-spy][href="#${id}"]`).classList.add("panel__a-active");
            }else{
                d.querySelector(`.panel__a[data-scroll-spy][href="#${id}"]`).classList.remove("panel__a-active");
            }
        })
    }

    const observer = new IntersectionObserver(cb,{
        //root
        // rootMargin : "-250px";
        threshold: [0.2, 0.6]
    })
    // console.log("observer", observer);
    $sections.forEach(el => observer.observe(el));
}