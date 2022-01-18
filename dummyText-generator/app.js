const amount = document.querySelector('#amount');
const btn = document.querySelector('.btn');
const icon = document.querySelector('.icon')
const result = document.querySelector('#result');

const dummyText = [
"Lorem","ipsum","dolor","sit","amet,","consectetuer","adipiscing","elit.","Aenean","commodo","ligula","eget","dolor.",'Aenean',"massa.","Cum","sociis","natoque","penatibus","et","magnis","dis","parturient","montes,","nascetur","ridiculus","mus.","Donec","quam","felis,","ultricies","nec,","pellentesque","eu,","pretium","quis,","sem.","Nulla","consequat","massa","quis","enim.","Donec","pede","justo,","fringilla","vel,","aliquet","nec,","vulputate","eget,","arcu.","In","enim","justo,","rhoncus","ut,","imperdiet","a,","venenatis","vitae,","justo.","Nullam","dictum","felis","eu","pede","mollis","pretium.","Integer","tincidunt.","Cras","dapibus.","Vivamus","elementum","semper","nisi.","Aenean","vulputate","eleifend","tellus.","Aenean","leo","ligula,","porttitor","eu,","consequat","vitae,","eleifend","ac,","enim.","Aliquam","lorem","ante,","dapibus","in,","viverra","quis,","feugiat","a,","tellus.","Phasellus","viverra","nulla","ut","metus","varius","laoreet.","Quisque","rutrum.","Aenean","imperdiet.","Etiam","ultricies","nisi","vel","augue."
// 117 word are there.
];

btn.addEventListener('click', generate);

function generate(event){
  event.preventDefault();
  const word = amount.value;
  const text = dummyText.slice(0, word).join(' ');
  
  result.innerHTML = text
}


