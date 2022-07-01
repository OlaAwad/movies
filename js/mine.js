// Toggle navbar:
let navMenuWidth = $('#nav-menu').width()
// console.log(navMenuWidth)
$('#open').click(function(){
  $('#nav-menu').css('left', '0')
  $('#side-nav').css('left', navMenuWidth)
  // $(".tglIcons").toggleClass("fa-align fa-xmark");
  $('.fa-align-justify').css('display', 'none')
  $('.fa-xmark').css('display', 'block')
  $('#nav-menu li').css({'opacity':'1', 'paddingTop':'25px'})
})
$('.fa-xmark').click(function(){
  $('#nav-menu').css('left', -navMenuWidth)
  $('#side-nav').css('left', '0px')
  $('.fa-align-justify').css('display', 'block')
  $('.fa-xmark').css('display', 'none')
})















// let city
// let searchInput = document.querySelector('#search')

// //Default city:
// window.addEventListener('load', async function () {
//   city = 'Giza'
//   //console.log('Onload:',city)
//   await getData(city)
// })

// //Get city name from search bar:
// searchInput.addEventListener('keyup', function (val) {
//   city = val.target.value
//   getData(city)
//   //console.log('Inside search():',city)
// })

// //request api:
// async function getData(cityName) {
//   cityName = city
//   //console.log('Inside getData() cityName:', cityName )
//   let apiRespone = await fetch(
//     `https://api.weatherapi.com/v1/forecast.json?key=5cf9cd4fb8644dc59e902006220206&q=%22%20${cityName}%20%22&days=7`,
//   )

//   let finalResult = await apiRespone.json()
//   //console.log('Inside getData():', finalResult.location.name)

//   //Call display data:
//   displayData(finalResult)
// }

// // Get day name:
// let days = []
// let today;
// let tomorrow;
// let afterTom;
// function getDayName(){
// for(let i = 0; i < 3; i++){  
//   let weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()+i]
//   days.push(weekday)
//   // console.log(days[i])
//   }  
// }
// getDayName()


// //display data:
// function displayData(data) {
//   // === Current day: ===
//   let day1 = data.location.localtime
//   console.log(day1)
//   document.querySelector('.day').innerHTML = days[0]
//   document.querySelector('.date').innerHTML = day1.split(' ')[0]
//   document.querySelector('.city').innerHTML = data.location.name
//   document.querySelector('.temp').innerHTML = `${data.current.temp_c}ْ C`
//   document.querySelector('.dayNight').src = data.current.condition.icon

//   document.querySelector('.condition').innerHTML = data.current.condition.text
//   //Add humidity:
//   document.querySelector('.humidity').innerHTML = `${data.current.humidity}%`
//   //Add wind:
//   document.querySelector('.wind').innerHTML = `${data.current.wind_kph}km/h`

//   // === Day 2: ===
//   document.querySelector('.day2').innerHTML = days[1]
//   let day2 = data.forecast.forecastday[1]
//   document.querySelector('.condIcon').src = day2.day.condition.icon
//   document.querySelector('.maxTemp').innerHTML = `${day2.day.maxtemp_c}ْ C`
//   document.querySelector('.minTemp').innerHTML = `${day2.day.mintemp_c}ْ C`
//   document.querySelector('.conditionWord').innerHTML = day2.day.condition.text

//   // === Day 3: ===
//   document.querySelector('.day3').innerHTML = days[2]
//   let day3 = data.forecast.forecastday[2]
//   document.querySelector('.condImg').src = day3.day.condition.icon
//   document.querySelector('.maxTemp2').innerHTML = `${day3.day.maxtemp_c}ْ C`
//   document.querySelector('.minTemp2').innerHTML = `${day3.day.mintemp_c}ْ C`
//   document.querySelector('.condWord').innerHTML = day3.day.condition.text
// }



