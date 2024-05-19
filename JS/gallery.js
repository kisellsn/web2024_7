const images = [
    {
        preview: '../../web2024_7/photos/img.png',
        original: '../../web2024_7/photos/img.png',
        description: 'зображення 1',
    },
    {
        preview: '../../web2024_7/photos/img_1.png',
        original: '../../web2024_7/photos/img_1.png',
        description: 'зображення 2',
    },
    {
        preview: '../../web2024_7/photos/img_2.png',
        original: '../../web2024_7/photos/img_2.png',
        description: 'зображення 3',
    },
    {
        preview: '../../web2024_7/photos/img_3.png',
        original: '../../web2024_7/photos/img_3.png',
        description: 'зображення 4',
    },
    {
        preview: '../../web2024_7/photos/img_4.png',
        original: '../../web2024_7/photos/img_4.png',
        description: 'зображення 5',
    },
    {
        preview: '../../web2024_7/photos/img_5.png',
        original: '../../web2024_7/photos/img_5.png',
        description: 'зображення 6',
    },

];

const galleryContainer = document.querySelector('.gallery');

const galleryMarkup = images.map(({ preview, original, description }) => {
    return `
        <li>
            <img src="${preview}" data-source="${original}" alt="${description}">
        </li>
    `;
}).join('');

galleryContainer.innerHTML = galleryMarkup;

galleryContainer.addEventListener('click', (event) => {
    event.preventDefault();

    const isImage = event.target.nodeName === 'IMG';
    if (!isImage) return;

    const originalImageURL = event.target.dataset.source;
    console.log(originalImageURL);

    const instance = basicLightbox.create(`
        <img src="${originalImageURL}" alt="${event.target.alt}">
    `);

    instance.show();
});
