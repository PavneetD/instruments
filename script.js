window.addEventListener('keydown',function(e)
{
    var key = this.document.querySelector(`.box[data-key="${e.keyCode}"]`);
    var audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(audio==null)
    {
        return;
    }
    this.console.log(key);
    this.console.log(audio.src);
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
    var keyList = this.document.querySelectorAll(".box");
    function removeTransition(e)
    {
        if(e.propertyName !== 'transform')
        {
            return;
        }
        key.classList.remove('play');
        
    }
   

    keyList.forEach(key =>  key.addEventListener('transitionend',removeTransition));

})