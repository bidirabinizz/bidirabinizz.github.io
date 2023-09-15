window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 400);
});

var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

const sr = ScrollReveal();

ScrollReveal({ reset: true });

sr.reveal(".mouse", {
  delay: 300,
  opacity: 0,
  distance: "40px",
  origin: "top",
});

sr.reveal(".navbar", {
  delay: 400,
  opacity: 0,
  distance: "50px",
  origin: "top",
});
sr.reveal(".progressbar", {
  delay: 200,
  opacity: 0.1,
  distance: "30px",
  origin: "left",
});
sr.reveal(".home-wallpaper", {
  delay: 200,
  opacity: 0.1,
});

sr.reveal(".bizkimiz-header", {
  delay: 100,
  opacity: 0,
  distance: "100%",
  origin: "left",
});
sr.reveal(".bizkimiz-aciklama", {
  delay: 400,
  opacity: 0,
  distance: "20px",
  origin: "left",
});

sr.reveal(".hizmetler-header", {
  delay: 400,
  opacity: 0,
});
sr.reveal(".hizmetler-comment", {
  delay: 100,
  opacity: 0,
  scale: 0.3,
});
sr.reveal(".software-header", {
  delay: 100,
  opacity: 0,
  distance: "100%",
  origin: "left",
});
sr.reveal(".software-comment", {
  delay: 100,
  opacity: 0,
  distance: "1000px",
  origin: "left",
});

sr.reveal(".calismalar1", {
  delay: 500,
  opacity: 0,
  distance: "90px",
  origin: "left",
});
sr.reveal(".calismalar2", {
  delay: 300,
  opacity: 0,
  distance: "90px",
  origin: "left",
  scale: 2,
});
sr.reveal(".hizmetler-img", {
  delay: 100,
  opacity: 0,
  distance: "20px",
  origin: "top",
  scale: 0.3,
});
sr.reveal(".ekibimiz-header", {
  delay: 400,
  opacity: 0,
  distance: "100%",
  origin: "left",
});

sr.reveal(".hosgeldiniz-mesaj", {
  delay: 500,
  opacity: 0,
  distance: "15px",
  origin: "top",
});
sr.reveal(".hosgeldiniz-mouse", {
  delay: 300,
  opacity: 0,
  distance: "10px",
  origin: "top",
});

// Saat detayı
let time = document.getElementById("time");
let date = document.getElementById("date");

function addZeros(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
function changeTime(i) {
  if (i > 12) {
    i = i % 12;
  }
  return i;
}
function timeConveret(i) {
  if (i > 12) {
    return "PM";
  } else {
    return "AM";
  }
}

function updateClock() {
  let now = new Date(); //current Date

  const dateSplit = now.toString().split(" ");

  let times =
    addZeros(changeTime(now.getHours())) +
    ":" +
    addZeros(now.getMinutes()) +
    ":" +
    addZeros(now.getSeconds()) +
    timeConveret(now.getHours());

  time.innerHTML = times;
  date.innerHTML = Object.values(dateSplit).slice(1, 4).join(" ");

  //calling this function again in 1 sec
  setTimeout(updateClock, 1000);
}
updateClock();

let tarih = document.getElementById('localHours');

function guncelSaat(){
  let date = new Date();
  let saat = date.getHours();
  let dakika = date.getMinutes();
  let saniye = date.getSeconds();


  let saatDetay = saat + ' ' + dakika + ' ' + saniye;  

  tarih.innerHTML = saatDetay;

} 
guncelSaat();
  setInterval(guncelSaat, 1000);

  const countrySelect = document.getElementById('country-select');
        const countryInfo = document.getElementById('country-info');

        // REST Countries API'sinin endpoint'i
        const apiUrl = 'https://restcountries.com/v3.1/name/';

        // Ülkeleri almak için API isteği gönderin
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(countries => {
                // Ülkelerin adlarını seçenekler olarak ekleyin
                countries.forEach(country => {
                    const option = document.createElement('option');
                    option.value = country.name.common;
                    option.textContent = country.name.common;
                    countrySelect.appendChild(option);
                });

                // İlk ülkeyi otomatik olarak seçili hale getirin
                displayCountryInfo(countries[0].name.common);
            })
            .catch(error => {
                console.error('API isteği başarısız oldu: ', error);
            });

        // Ülke seçimi değiştiğinde çağrılan işlev
        countrySelect.addEventListener('change', function() {
            const selectedCountry = this.value;
            displayCountryInfo(selectedCountry);
        });

        // Seçilen ülkenin bilgilerini görüntüleyen işlev
        function displayCountryInfo(countryName) {
            fetch(apiUrl + countryName)
                .then(response => response.json())
                .then(countryData => {
                    // Ülke bilgilerini HTML olarak görüntüle
                    const { name, capital, population, area, flags} = countryData[0];
                    countryInfo.innerHTML = `
                        <h2>${name.common}</h2>
                        <p>Başkent: ${capital}</p>
                        <p>Nüfus: ${population}</p>
                        <p>Yüzölçümü: ${area} km²</p>
                        <img src=${flags.png}>
                    `;
                })
                .catch(error => {
                    console.error('API isteği başarısız oldu: ', error);
                });
        }
  


//Konum api
let cityBilgileri = document.getElementById('countrySehir');
let ulkeBilgileri = document.getElementById('countryUlke');

        fetch('http://ip-api.com/json/')
  .then(response => response.json())
  .then(data => {
    const city = data.city;
    const region = data.regionName;
    const country = data.country;
    const latitude = data.lat;
    const longitude = data.lon;

    cityBilgileri.innerHTML = 'Şehir: ' + city;
    ulkeBilgileri.innerHTML = 'Ülke: ' + country;


    console.log('Bölge:', region);
    console.log("Ülke: ",country)
    console.log('Enlem:', latitude);
    console.log('Boylam:', longitude);
  })
  .catch(error => {
    console.error('API isteği başarısız oldu: ', error);
  });
  let istanbulSaat = document.getElementById('istanbulSaat');
  let newyorkSaat = document.getElementById('newyorkSaat');

  fetch('http://worldtimeapi.org/api/timezone/Europe/Istanbul')
      .then(response => response.json())
      .then(istanbulData => {
          const istanbulDatetime = new Date(istanbulData.utc_datetime);
          const istanbulHours = istanbulDatetime.getHours();
          const istanbulMinutes = istanbulDatetime.getMinutes();
          const istanbulSeconds = istanbulDatetime.getSeconds();

          const formattedIstanbulTime = `${istanbulHours}:${istanbulMinutes}:${istanbulSeconds}`;

          istanbulSaat.textContent = formattedIstanbulTime;

          fetch('http://worldtimeapi.org/api/timezone/America/New_York')
              .then(response => response.json())
              .then(newyorkData => {
                  const newyorkDatetime = new Date(newyorkData.utc_datetime);
                  const newyorkHours = newyorkDatetime.getHours();
                  const newyorkMinutes = newyorkDatetime.getMinutes();
                  const newyorkSeconds = newyorkDatetime.getSeconds();

                  const formattedNewYorkTime = `${newyorkHours}:${newyorkMinutes}:${newyorkSeconds}`;

                  newyorkSaat.textContent = formattedNewYorkTime;

                  // Saat farkını hesapla
                  const saatFarki = newyorkDatetime - istanbulDatetime;
                  const saatFarkiSaat = Math.floor(saatFarki / 3600000); // Milisaniyeden saate çevirme
                
                  console.log('İstanbul Saati:', formattedIstanbulTime);
                  console.log('New York Saati:', formattedNewYorkTime);
                  console.log('Saat Farkı:', saatFarkiSaat, 'saat');
              })
              .catch(error => {
                  console.error('New York API isteği başarısız oldu: ', error);
              });
      })
      .catch(error => {
          console.error('İstanbul API isteği başarısız oldu: ', error);
      });

      // Sayfa yüklenme esnasındaki efekt
      
window.addEventListener('load', function() {
  // Yükleniyor simgesini gizleyin
  document.querySelector('.loader-wrapper').style.display = 'none';
  
  // Sayfa içeriğini gösterin
  document.querySelector('.content').style.display = 'block';
});


var guncellemeTarihi = "15.09.2023";

// HTML içindeki "guncellemeTarihi" elementlerine tarih bilgisini ekleyin
var elements = document.querySelectorAll("#guncellemeTarihi");
elements.forEach(function(element) {
  element.textContent += guncellemeTarihi;
});