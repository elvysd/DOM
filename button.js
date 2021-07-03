function alertFunction() {
    alert("YAY! YOU DID IT!");
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
  }

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;

let r=4;
generate(r);

function generate(r) {
  document.querySelectorAll('.break').forEach(a => a.remove());
  document.querySelectorAll('.flex-container').forEach(a => a.remove());
  for (let i = 0; i <= (r*r-1); i++) {

    // select id
    const container = document.querySelector('#container');
    // add element div 
    const content = document.createElement('div');
    const content2 = document.createElement('div');
    // adds class "flex-container"
    if (i % r == 0) {
      content.classList.add('break');
      content2.classList.add('flex-container');
      // adds text content
      //content2.textContent = "i" + i;

      // adds actual content
      container.appendChild(content);
      container.appendChild(content2);

    }
    else {
      content.classList.add('flex-container');
      // adds text content
      //content.textContent = "i" + i;
      // adds actual content
      container.appendChild(content);
    }
  }
}
