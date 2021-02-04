const TypeWriter = function (txtElement, words, wait = 3000) {
    this.txtElement = txtElement;
    this.words = words;
    this.txt = '';
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    this.type();
    isDeleting = false;
}

//Type method
TypeWriter.prototype.type = function () {
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];
    console.log(fullTxt);
    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    }
    else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }
    //Initial Type Speed
    let typeSpeed = 150;
    if (this.isDeleting) {
        typeSpeed /= 3;
    }
    // If word is complete
    if (!this.isDeleting && this.txt == fullTxt) {
        //pause
        typeSpeed = this.wait;
        this.isDeleting = true;
    }
    else if (this.isDeleting && this.txt == '') {
        this.isDeleting = false;
        this.wordIndex++;
        //Pause
        typeSpeed = 3000;
    }

    // insert Txt into element
    this.txtElement.innerHTML = `<span class ="txt">${this.txt}</span>`;
    setTimeout(() => this.type(), typeSpeed)
}
// Get current index of word
//Init on DOM Load
document.addEventListener('DOMContentLoaded', init);

function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    new TypeWriter(txtElement, words, wait);
}