function alertFunction() {
    alert("YAY! YOU DID IT!");
    const container = document.querySelector('#container');

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';
  }

const btn = document.querySelector("#btn");
btn.onclick = alertFunction;
console.log(3);

for (let i = 0; i < 64; i++) {
  console.log(i);
  // select id
  const container = document.querySelector('#container');
  // add element div 
  const content = document.createElement('div');
  // adds class "flex-container"
  if (i % 2 == 0) {
    content.classList.add('flex-container' + 1);
    // adds text content
    content.textContent = 'i' + i;
    // adds actual content
    container.appendChild(content);
  }
  else {
    content.classList.add('flex-container');
    // adds text content
    content.textContent = 'i' + i;
    // adds actual content
    container.appendChild(content);
  }
}

