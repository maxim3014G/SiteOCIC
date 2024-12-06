function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
     change.target.classList.add('element-show');
    }
  });
}


let options = {
  threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('p');
let elements_1 = document.querySelectorAll('h1');
let elements_2 = document.querySelectorAll('h2');

for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elements_1) {
  observer.observe(elm); 
}
for (let elm of elements_2) {
  observer.observe(elm); 
}


