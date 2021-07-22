function createPointer () {
    const vw = window.innerWidth;
    const pointerWidth = 40;
    const pointerHeight = 20;
    const svg = document.querySelector('.pointer');
    const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
    const points = `
        0,5
        ${ .25 * vw - pointerWidth * .5 },${ pointerHeight * .25 } 
        ${ .25 * vw - pointerWidth * .5 },0 
        ${ .25 * vw },${ pointerHeight * .5 }
        ${ .25 * vw - pointerWidth * .5 },${ pointerHeight }
        ${ .25 * vw - pointerWidth * .5 },${ pointerHeight * .75 } 
        0,15
    `;
    polyline.setAttribute('points', points);
    svg.appendChild(polyline);
}
