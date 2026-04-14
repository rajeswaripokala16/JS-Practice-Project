const wrapper = document.querySelector('.wrapper');
  const observer = new MutationObserver(indexCircles);
  observer.observe(wrapper, { childList: true });

function indexCircles() {
    const circles = document.querySelectorAll('.circle');
    const total = circles.length;
    circles.forEach((el, i) => {
      const d = (i / (total - 1)) * 100;
      el.style.setProperty('--distance', parseInt(d) + '%');
    });
	  updateMessage()
  }

  indexCircles();

document.getElementById('add').addEventListener('click', () => {
    const c = document.createElement('div');
    c.className = 'circle';
    wrapper.appendChild(c);  
});

function updateMessage() {
	const children = wrapper.children;
	/* loop through the wrapper and grab the code for each circle */
	output.textContent = "";
	for (const child of children) {
		output.textContent += child.outerHTML.toString() + "\n";
	}
	output.classList.remove("prettyprinted");
	PR.prettyPrint();
}

