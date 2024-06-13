// //  const url = 'https://api.openweathermap.org/data/2.5/'
// //  const key =  '12af134e039c1f5b4472610ae868800b'

// const apiKey = '12af134e039c1f5b4472610ae868800b';
// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';


// // Şehir girişi yapıldığında hava durumu bilgisini getiren fonksiyon
// function getWeather(city) {
//   const url = `${baseUrl}?q=${city}&appid=${apiKey}`;

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Hava durumu bilgilerini işle
//       const temperature = data.main.temp;
//       const description = data.weather[0].description;
//       const minTemp = data.main.temp_min;
//       const maxTemp = data.main.temp_max;

//       // Sonuçları HTML'e yazdır
//       document.querySelector('.city').textContent = city;
//       document.querySelector('.temp').textContent = `${Math.round(temperature)}°C`;
//       document.querySelector('.desc').textContent = description;
//       document.querySelector('.minmax').textContent = `${Math.round(minTemp)}°C / ${Math.round(maxTemp)}°C`;
//     })
//     .catch(error => {
//       console.log('Hava durumu bilgisi alınamadı', error);
//     });
// }

// // Arama çubuğuna yazılan şehir ismini alıp hava durumu bilgisini getir
// document.querySelector('input[type="searchBar"]').addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     const city = e.target.value;
//     getWeather(city);
//     e.target.value = ''; // Arama çubuğunu temizle
//   }
// });

// ------
// const apiKey = '12af134e039c1f5b4472610ae868800b';
// const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// // Şehir girişi yapıldığında hava durumu bilgisini getiren fonksiyon
// function getWeather(city) {
//   const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric &lang=tr`; // units=metric ekleyerek Celsius birimini kullanmasını sağlayın

//   fetch(url)
//     .then(response => response.json())
//     .then(data => {
//       // Hava durumu bilgilerini işle
//       const temperature = data.main.temp;
//       const description = data.weather[0].description;
//       const minTemp = data.main.temp_min;
//       const maxTemp = data.main.temp_max;

// // Sıcaklık değerlerini Kelvin'den Celsius'a dönüştür
// const temperatureCelsius = temperature - 273.15;
// const minTempCelsius = minTemp - 273.15;
// const maxTempCelsius = maxTemp - 273.15;

//       // Sonuçları HTML'e yazdır
//       document.querySelector('.city').textContent = city;
//       document.querySelector('.temp').textContent = `${Math.round(temperature)}°C`;
//       document.querySelector('.desc').textContent = description;
//       document.querySelector('.minmax').textContent = `${Math.round(minTemp)}°C / ${Math.round(maxTemp)}°C`;
//     })
//     .catch(error => {
//       console.log('Hava durumu bilgisi alınamadı', error);
//     });
// }

// // Arama çubuğuna yazılan şehir ismini alıp hava durumu bilgisini getir
// document.querySelector('input[type="searchBar"]').addEventListener('keypress', function(e) {
//   if (e.key === 'Enter') {
//     const city = e.target.value;
//     getWeather(city);
//     e.target.value = ''; // Arama çubuğunu temizle
//   }
// });

const apiKey = '12af134e039c1f5b4472610ae868800b';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Şehir girişi yapıldığında hava durumu bilgisini getiren fonksiyon
function getWeather(city) {
  const url = `${baseUrl}?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Hava durumu bilgilerini işle
      const temperature = data.main.temp;
      const description = data.weather[0].description;
      const minTemp = data.main.temp_min;
      const maxTemp = data.main.temp_max;

      // Sıcaklık değerlerini Kelvin'den Celsius'a dönüştür
      const temperatureCelsius = temperature.toFixed(1);
      const minTempCelsius = minTemp.toFixed(1);
      const maxTempCelsius = maxTemp.toFixed(1);

      // Sonuçları HTML'e yazdır
      document.querySelector('.city').textContent = city;
      document.querySelector('.temp').textContent = `${temperatureCelsius}°C`;
      document.querySelector('.desc').textContent = description;
      document.querySelector('.minmax').textContent = `${minTempCelsius}°C / ${maxTempCelsius}°C`;
    })
    .catch(error => {
      console.log('Hava durumu bilgisi alınamadı', error);
    });
}

// Arama çubuğuna yazılan şehir ismini alıp hava durumu bilgisini getir
document.querySelector('input[type="searchBar"]').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const city = e.target.value;
    getWeather(city);
    e.target.value = ''; // Arama çubuğunu temizle
  }
});

