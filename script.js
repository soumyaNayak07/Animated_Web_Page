Shery.imageEffect(".images", {style:5,config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.777777835037379},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScrolzl":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.23,"range":[0,2]},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":9.16,"range":[0,100]}},gooey:true})
let text=document.querySelector(".main")
let i_letter=document.querySelectorAll(".i_letter h1")
let ii_letter=document.querySelectorAll(".ii_letter h1")
let iii_letter=document.querySelectorAll(".iii_letter h1")
let index=0
let animat=false

text.addEventListener("click" , ()=>{
    
   if (!animat) {
    animat=true
    gsap.to(i_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function(){
            console.log(this);
            gsap.set(this._targets[0],{ top:'100%'})
            animat=false
        },
    })


    gsap.to(ii_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function(){
            console.log(this);
            gsap.set(this._targets[0],{ top:'100%'})
            animat=false
        },
    })

    gsap.to(iii_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        onComplete: function(){
            console.log(this);
            gsap.set(this._targets[0],{ top:'100%'})
            animat=false
        },
    })


    if (index == 4) {
        index=0
    } else {
        index++
    }

    
    gsap.to(i_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1,
        
    })


    gsap.to(ii_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1
    })

    gsap.to(iii_letter[index],{
        top:'-=100%',
        ease: Expo.easeInOut,
        duration: 1
    })
   }
   
})