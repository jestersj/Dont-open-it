const firstBlock = document.getElementById('dontPushIt');
const secondBlock = document.getElementById('areYouSure');
const thirdBlock = document.getElementById('iHopeYouKnow');
const fourthBlock = document.getElementById('whatYouAreDoing');
const fifthBlock = document.getElementById('ok');
const sixthBlock = document.getElementById('enjoy');
const seventhBlock = document.getElementById('rickrolled');


firstBlock.addEventListener("click", ()=> {
    firstBlock.style.animationDirection = "reverse";
    firstBlock.style.marginTop = "100%";
    firstBlock.style.backgroundColor = "transparent";
    firstBlock.style.color = "transparent";
    firstBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    firstBlock.style.transition = "2s";
    timerHide(firstBlock)
    timerShow(secondBlock)
})

secondBlock.addEventListener("click", ()=> {
    secondBlock.style.display = "inline-block";
    secondBlock.style.animationDirection = "reverse";
    secondBlock.style.marginTop = "0%";
    secondBlock.style.backgroundColor = "transparent";
    secondBlock.style.color = "transparent";
    secondBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    secondBlock.style.transition = "2s";
    timerHide(secondBlock)
    timerShow(thirdBlock)
    timerShow(fourthBlock)
})

thirdBlock.addEventListener('click', ()=> {
    thirdBlock.style.display = "inline-block";
    thirdBlock.style.animationDirection = "reverse";
    thirdBlock.style.backgroundColor = "transparent";
    thirdBlock.style.color = "transparent";
    thirdBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    thirdBlock.style.transition = "2s";
    thirdBlock.style.marginRight= "100%"

    fourthBlock.style.display = "inline-block";
    fourthBlock.style.animationDirection = "reverse";
    fourthBlock.style.backgroundColor = "transparent";
    fourthBlock.style.color = "transparent";
    fourthBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    fourthBlock.style.transition = "2s";
    fourthBlock.style.marginLeft = "100%";
    timerHide(thirdBlock)
    timerHide(fourthBlock)
    timerShow(fifthBlock)
})

fourthBlock.addEventListener('click', ()=> {
    thirdBlock.style.display = "inline-block";
    thirdBlock.style.animationDirection = "reverse";
    thirdBlock.style.backgroundColor = "transparent";
    thirdBlock.style.color = "transparent";
    thirdBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    thirdBlock.style.transition = "2s";
    thirdBlock.style.marginRight= "100%"


    fourthBlock.style.display = "inline-block";
    fourthBlock.style.animationDirection = "reverse";
    fourthBlock.style.backgroundColor = "transparent";
    fourthBlock.style.color = "transparent";
    fourthBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    fourthBlock.style.transition = "2s";
    fourthBlock.style.marginLeft = "100%";
    timerHide(thirdBlock)
    timerHide(fourthBlock)
    timerShow(fifthBlock)
})

fifthBlock.addEventListener("click", ()=> {
    fifthBlock.style.display = "inline-block";
    fifthBlock.style.animationDirection = "reverse";
    fifthBlock.style.marginTop = "0%";
    fifthBlock.style.marginBottom = "100%";
    fifthBlock.style.marginRight = "100%";
    fifthBlock.style.backgroundColor = "transparent";
    fifthBlock.style.color = "transparent";
    fifthBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    fifthBlock.style.transition = "2s";
    timerHide(fifthBlock);
    timerShow(sixthBlock);
})

sixthBlock.addEventListener("click", ()=> {
    sixthBlock.style.display = "inline-block";
    sixthBlock.style.animationDirection = "reverse";
    sixthBlock.style.marginTop = "100%";
    sixthBlock.style.marginBottom = "0%";
    sixthBlock.style.marginLeft = "100%";
    sixthBlock.style.backgroundColor = "transparent";
    sixthBlock.style.color = "transparent";
    sixthBlock.style.boxShadow = "0px 0px 10px 6px transparent";
    sixthBlock.style.transition = "2s";
    timerHide(sixthBlock);
    timerShow(seventhBlock)
})


function timerHide(el) {
    setTimeout(()=>el.style.display="none", 1000)
}
function timerShow(el) {
    setTimeout(()=>el.style.display="inline-block", 1000)
}