import { icons } from './icons';

function makeImageMarkup({ hits }) {
  const markup = hits.map(
    ({
      largeImageURL,
      webformatURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    }) => `<div class="photo-card">
    <a class="gallery-item" href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" loading="lazy"/></a>
    <div class="info">
    <p class="info-item">
        <b>${icons.likes}</b></br>${likes}
    </p>
    <p class="info-item">
        <b>${icons.views}</b></br>${views}
    </p>
    <p class="info-item">
        <b>${icons.comments}</b></br>${comments}
    </p>
    <p class="info-item">
        <b>${icons.downloads}</b></br>${downloads}
    </p>
    </div></div>`
  );

  return markup.join('');
}

export { makeImageMarkup };
