'use strict';


fetch('js/images.json')
.then(Response => Response.json())
.then(data => {
    let i = 0;
    const itemContainer = document.getElementsByClassName('portfolio__item');
    data.slider.forEach(item => {
         
        let itemImg = document.createElement('img');

        itemImg.src = item.url;
        console.log(item);
        itemImg.alt = item.desc;
        itemContainer[i].appendChild(itemImg);
        i++;    
        

    });
})
.catch(error => console.error(error));
