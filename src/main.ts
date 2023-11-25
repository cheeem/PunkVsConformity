let len: number = 0;
let end: number = 0;

const bar: HTMLDivElement = document.querySelector("#progress-bar")!;

const observer: IntersectionObserver = new IntersectionObserver((entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {        
	console.log("--------")
    entries.forEach(entry => {

        const idx: number = parseInt(entry.target.className);

		if(entry.isIntersecting) {
            end = idx;
        }

        // const top: number = 0;
        const height: number = (end + 1) / len * 100;

        bar.setAttribute('style', `height: ${height}%;`);


	});
});

const articles: NodeListOf<HTMLElement> = document.querySelectorAll("article");

for(let i = 0; i < articles.length; i++) {

    const sections = articles[i].children;

    len += sections.length;

    for(let j = 0; j < sections.length; j++) {

        const str = (len - sections.length + j).toString();

        sections[j].className = str.toString();

        observer.observe(sections[j]);
    }

}
