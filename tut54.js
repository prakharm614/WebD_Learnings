document.addEventListener("DOMContentLoaded", () => { //to ensure code runs only after DOM is fully loaded
    // Code 1: Adding paragraphs one by one
    const t1 = performance.now();
    for (let i = 1; i < 100; i++) {
        let para = document.createElement('p');
        para.textContent = "This is para " + i;
        document.body.appendChild(para);
    }
    const t2 = performance.now();
    console.log("Time taken for Code 1: " + (t2 - t1) + "ms");

    // Code 2: Adding all paragraphs to a div first
    const t3 = performance.now();
    let mydiv = document.createElement('div');
    for (let i = 1; i < 100; i++) {
        let para = document.createElement('p');
        para.textContent = "This is para " + i;
        mydiv.appendChild(para);
    }
    document.body.appendChild(mydiv);
    const t4 = performance.now();
    console.log("Time taken for Code 2: " + (t4 - t3) + "ms");
});


// BEST CODE by document fragement concept

let fragement=document.createDocumentFragment();
for (let i = 1; i <=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i;
    // NO REFLOW and No Repaint
    fragement.appendChild(para);
}

document.body.appendChild(fragement);// 1 reflow and 1 repaint
