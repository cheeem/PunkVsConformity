const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {        
	entries.forEach(entry => {
		if(!entry.isIntersecting) return;
		entry.target.classList.add("view");
		observer.unobserve(entry.target);
	});
});

const articles = document.querySelectorAll("article");

for(let i = 0; i < articles.length; i++) {
    const sections = articles[i].children;
    for(let j = 0; j < sections.length; j++) {
        console.log(i, j);
    }
}
