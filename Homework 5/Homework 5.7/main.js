const listOfItem = (li, counter) => {
    document.write(`<ul>`);
    for (let i = 0; i < counter; i++) {
        document.write(`<li> ${li}</li>`);
    }
    document.write(`</ul>`);
    }

listOfItem('Hello World', 10);
