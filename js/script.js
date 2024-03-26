const DomElement = function(sel, h, w, bg, fSize) {
    this.selector = sel.substring(1, sel.length);
    this.height = h+'px';
    this.width = w+'px';
    this.bg = bg;
    this.fontSize = fSize+'px';
    let elementPage;
    this.createElem = function() {       
        if (sel[0] === '.') {
            elementPage = document.createElement('div');
            elementPage.setAttribute('class', this.selector);                        
        } else if (sel[0] === '#') {
            elementPage = document.createElement('p');
            elementPage.setAttribute('id', this.selector);                    
        }
        elementPage.style.cssText = `height:${this.height}; 
                                    width:${this.width};    
                                    background:${this.bg};
                                    font-size:${this.fontSize}`;
        elementPage.textContent = "Это текст нужен для примера";
        document.body.insertAdjacentElement('afterend', elementPage);
    };    
};

const newElem = new DomElement('#block', 250, 400, 'green', 30);

newElem.createElem();
