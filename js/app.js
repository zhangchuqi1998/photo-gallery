const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndex = [1,2,3,4,5,6,7,8,9, 10,11,12];
const selectedIndex = null;

imageIndex.forEach(i => {
    const image = document.createElement('img');
    image.src = `/img/img-${i}.jpg`;
    image.alt = `image ${i}`;
    image.classList.add('galleryImg');
    image.addEventListener('click', ()=>{
        popup.style.transform = 'translateY(0)'
        selectedImage.src = `img/img-${i}.jpg`;
        selectedImage.alt = `img-${i}`;
    })
    gallery.appendChild(image);
})

popup.addEventListener('click', ()=>{
    popup.style.transform='translateY(-100%)';
    popup.src = '';
    popup.alt = '';
})