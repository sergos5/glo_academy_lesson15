document.addEventListener('DOMContentLoaded', () => {

    'use strict';
    const DomElement = function(selector, height, width, bg, fontSize) {
        this.selector = selector.substring(1);
        this.height = height+'px';
        this.width = width+'px';
        this.bg = bg;
        this.fontSize = fontSize+'px';
        this.top = 0;
        this.left = 0;
        let elementPage;
        this.createElem = function() {       
            if (selector[0] === '.') {
                elementPage = document.createElement('div');
                elementPage.setAttribute('class', this.selector);                        
            } else if (selector[0] === '#') {
                elementPage = document.createElement('p');
                elementPage.setAttribute('id', this.selector);                    
            }
            elementPage.style.cssText = `height:${this.height}; 
                                        width:${this.width};    
                                        background:${this.bg};
                                        font-size:${this.fontSize};
                                        position:absolute;
                                        top:${this.top}px;
                                        left:${this.left}px`;
            elementPage.textContent = "нажми кнопку со стрелочкой чтобы меня переместить";
            document.body.insertAdjacentElement('afterend', elementPage);
        };    
    };

    const newElem = new DomElement('.block', 100, 100, 'red', 16);
    newElem.createElem();

    const square = document.querySelector('.block');
    let topIndent = parseInt(square.style.top);
    let leftIndent = parseInt(square.style.left);    

    document.addEventListener('keydown', (event)=> {
        if (event.code === 'ArrowUp') topIndent -= 10;
        if (event.code === 'ArrowDown') topIndent += 10;
        if (event.code === 'ArrowLeft') leftIndent -= 10;
        if (event.code === 'ArrowRight') leftIndent += 10;       
        square.style.cssText += `top:${topIndent}px;
                                left:${leftIndent}px`;        
    });      
});

