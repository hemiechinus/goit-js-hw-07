const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const ulList = document.getElementById('gallery');
ulList.className = 'gallery_list';
const LiList = document.createElement('li');

/*
const imagesEl = images.map(value => {
  const imageEl = document.createElement('img');
  imageEl.src = value.url ;
  imageEl.alt = value.alt;
  return imageEl;
});
ulList.append(LiList,imagesEl);
*/
const elements = images.map(value => {
  const imageList = `<li> <img class="gallery_img" src=${value.url} alt=${value.alt}> </li>`;
  return imageList;
});
ulList.insertAdjacentHTML('afterbegin', elements.join(''))
  


