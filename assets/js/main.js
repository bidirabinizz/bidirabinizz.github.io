

window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle('sticky', window.scrollY > 400);
});




var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});








    const sr = ScrollReveal();

    ScrollReveal({ reset: true });

   sr.reveal(".mouse",{
    delay: 300,
    opacity: 0,
    distance: "40px",
    origin:"top"
   })


    sr.reveal(".navbar",{
        delay: 400,
        opacity: 0,
        distance: "50px",
        origin: "top"
    });
    sr.reveal(".progressbar",{
        delay: 200,
        opacity: 0.1,
        distance: "30px",
        origin: "left"
    });
    sr.reveal(".home-wallpaper",{
        delay: 200,
        opacity: 0.1,
        
        
    });





    sr.reveal(".bizkimiz-header",{
        delay: 100,
        opacity: 0,
        distance: "100%",
        origin: "left"
    });
    sr.reveal(".bizkimiz-aciklama",{
        delay: 400,
        opacity: 0,
        distance: "20px",
        origin: "left"
    });





    sr.reveal(".hizmetler-header",{
        delay: 400,
        opacity: 0,

    });
    sr.reveal(".hizmetler-comment",{
        delay: 100,
        opacity: 0,
        scale: 0.3
        
        
    });
    sr.reveal(".software-header",{
        delay:100,
        opacity:0,
        distance:"100%",
        origin:"left"
    })
    sr.reveal(".software-comment",{
        delay: 100,
        opacity:0,
        distance:"1000px",
        origin: "left"
    })



    sr.reveal(".calismalar1",{
        delay: 500,
        opacity: 0,
        distance: "90px",
        origin: "left",
        
    });
    sr.reveal(".calismalar2",{
        delay: 300,
        opacity: 0,
        distance: "90px",
        origin: "left",
        scale: 2,
    });
    sr.reveal(".hizmetler-img",{
        delay: 100,
        opacity: 0,
        distance: "20px",
        origin: "top",
        scale: 0.3

    });
    sr.reveal(".ekibimiz-header",{
        delay:400,
        opacity:0,
        distance: "100%",
        origin: "left"
    })

    sr.reveal(".hosgeldiniz-mesaj",{
        delay:500,
        opacity:0,
        distance: "15px",
        origin: "top"
    })
    sr.reveal(".hosgeldiniz-mouse",{
        delay: 300,
        opacity: 0,
        distance: "10px",
        origin: "top"
    })





    // Saat detayı
    let time = document.getElementById("time")
    let date = document.getElementById("date")
    
    function addZeros(i){
        if(i < 10){
            i = "0"+i
        }
        return i;
    }
    function changeTime(i){
        if(i > 12){
            i = i%12
        }
        return i;
    }
    function timeConveret(i){
        if (i > 12){
            return 'PM'
        } else {
            return 'AM'
        }
    
    
    }
    
    function updateClock(){
        let now = new Date() //current Date
    
        const dateSplit = now.toString().split(" ")
    
        let times = addZeros(changeTime(now.getHours())) + ':' + addZeros(now.getMinutes()) + ':' + addZeros(now.getSeconds()) + timeConveret(now.getHours())
        
        
    
        time.innerHTML = times
        date.innerHTML = Object.values(dateSplit).slice(1,4).join(' ')
    
        //calling this function again in 1 sec
        setTimeout(updateClock, 1000)
    
    }
    updateClock();
    

