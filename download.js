// download button ripple
let buttons = document.querySelectorAll(".button");
for(var i=0; i<buttons.length; i++){
    buttons[i].addEventListener("click",(e)=>{
        e.preventDefault();


        let overlay = document.createElement('span');
        overlay.classList.add("overlay");

        let x=e.clientX-e.target. offsetX;
        let y=e.clientY-e.target. offsetY;

        overlay.style.left = x + "px";
        overlay.style.left = y + "px";

        e.target.appendChild(overlay);

        setTimeout(()=>{
            overlay.remove();
        },500);        
        console.log(e);

    });
}


// download
document.getElementById('download').addEventListener('click',()=> {
    const resume= document.querySelector('.resume-container');

    const options={
        margin:0,
        filename: 'template.pdf',
        image: {type: 'jpeg', quality: 0.98},
        html2canvas: {scale: 2 },
        jsPDF: {unit:'mm',format:'a4',orientation:'portrait'}
    };
    html2pdf().set(options).from(resume).save();
});