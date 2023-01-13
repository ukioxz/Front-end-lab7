import React from 'react';
import mistoImg from './misto.jpg';

function Image() {
    function addImage() {
        const copy = document.getElementById('copyImg');
        const imgPlace = document.getElementById('img-placeholder');
        if (!copy) {
            let img = document.createElement('img');
                img.id = 'copyImg';
                img.src = mistoImg;
                img.alt = 'misto';
                img.width = '500';
                imgPlace.append(img);
        }
    }

    let zoomValue = 1;
    function zoomIn() {
        const copy = document.getElementById('copyImg');
        zoomValue+=0.1;
        if (!copy || zoomValue < 1) return;
        copy.style.transform = `scale(${zoomValue})`;
    }

    function zoomOut() {
        const copy = document.getElementById('copyImg');
        zoomValue-=0.1;
        if (!copy || zoomValue < 1) return;
        copy.style.transform = `scale(${zoomValue})`;
    }

    function removeImage() {
        const copy = document.getElementById('copyImg');
        if (copy) copy.remove();
    }

    return (
        <div>
            <div id="img-placeholder" style={{ overflow: 'hidden', width: '500px' }}></div>
            <button onClick={addImage}>Додати</button>
            <button onClick={zoomIn}>Збільшити</button>
            <button onClick={zoomOut}>Зменшити</button>
            <button onClick={removeImage}>Видалити</button>
        </div>
    )
}

export default Image;