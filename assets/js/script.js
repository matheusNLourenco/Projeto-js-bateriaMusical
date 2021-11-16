// monitora alguma tecla que foi presionada e soltada
document.body.addEventListener('keyup', (e)=>{
    playSound(e.code.toLowerCase())
})


// adiciona evento de click no botao tocar, para pegar qual tecla foi digitada no input
document.querySelector('.composer button').addEventListener('click', ()=>{
   let song = document.querySelector('#input').value
   
   if(song !== ''){
       let songArray = song.split('')

       playComposer(songArray)
   }
})


// funcão para gerar o som com sua respectiva tecla que foi pressionada
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)
    let key = document.querySelector(`div[data-key="${sound}"]`)

    if(audioElement){
        audioElement.currentTime = 0
        audioElement.play();
    }

    if(key){
        key.classList.add('active')
        
        setTimeout(()=>{
            key.classList.remove('active')
        }, 300)
    }
}


// funcão para gerar o som que foi digitado no input
function playComposer(songArray){

    let wait = 0;

        for(let songItem of songArray){

            setTimeout(()=>{
                playSound(`key${songItem}`)
            }, wait);

            wait += 250;
        } 
}


