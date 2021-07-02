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

for (let i = 0; i < 16; i++) {
  console.log(i);
  // select id
  const container = document.querySelector('#container');
  // add element div 
  const content = document.createElement('div');
  // adds class "content"
  content.classList.add('content');
  // adds text content
  content.textContent = '';
  // adds actual content
  container.appendChild(content);
}



