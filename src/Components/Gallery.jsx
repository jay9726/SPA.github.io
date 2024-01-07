import React from 'react'
import './Style.css'

const Gallery = () => {
  return (
    <>
         
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://img.freepik.com/photos-premium/silhouette-arbre-contre-ciel-orange-coucher-du-soleil_94574-4001.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698105600&semt=ais" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://www.imageshine.in/uploads/gallery/Road-with-Sky-wallpaper-for-editing.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://static.wixstatic.com/media/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png/v1/fill/w_640,h_366,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/bb1bd6_f221ad0f4d6f4103bf1d37b68b04492e~mv2.png" alt=""/>
    </div>

    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://5.imimg.com/data5/YY/OP/MY-66080517/get-instant-dubai-visa-500x500.jpg" alt=""/>
    </div>
</div>


    </>
  )
}

export default Gallery