function createNames (list) {
    const container = document.querySelector('.outer-circle');
    const alpha = 360 / list.length;

    for (let i = 0; i < list.length; i++) {
        // split line
        const line = document.createElement('DIV');
        line.setAttribute('class', 'split-line');
        line.setAttribute('style', `transform: rotate(${ alpha * i }deg)`);
        container.appendChild(line);
        // name
        const nameContainer = document.createElement('DIV');
        nameContainer.setAttribute('class', 'name');
        nameContainer.setAttribute('style', `transform: rotate(${ alpha * (i + .5) }deg)`);
        const name = document.createElement('DIV');
        name.setAttribute('class', 'name-box');
        name.innerText = list[i];
        nameContainer.appendChild(name);
        container.appendChild(nameContainer);
    }
}
