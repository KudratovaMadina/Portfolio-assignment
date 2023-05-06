'use stirct';


fetch('js/images.json')
  .then(response => response.json())
  .then(data => {


    const art = document.querySelector('.photos__item');

    data.art.forEach(obj => {
      let myArtsItem = document.createElement('img');
      myArtsItem.src = obj.url;
      myArtsItem.alt = obj.desc;
      art.appendChild(myArtsItem);

      document.querySelectorAll('.photos__item img').forEach(item => {
        item.onclick = () => {
          document.querySelector('.photos__popup').style.display = 'block';
          document.querySelector('.photos__popup img').src = item.getAttribute('src');
        }
      })

      document.querySelector('.photos__popup span').onclick = () => {
        document.querySelector('.photos__popup').style.display = 'none';

      }
    });
  })
  .catch(error => console.error(error));