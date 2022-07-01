// Toggle navbar:
let navMenuWidth = $('#nav-menu').width()
// console.log(navMenuWidth)
$('#open').click(function () {
  $('#nav-menu').css('left', '0')
  $('#side-nav').css('left', navMenuWidth)
  // $(".tglIcons").toggleClass("fa-align fa-xmark");
  $('.fa-align-justify').css('display', 'none')
  $('.fa-xmark').css('display', 'block')
  $('#nav-menu li').css({ opacity: '1', paddingTop: '25px' })
})
$('.fa-xmark').click(function () {
  $('#nav-menu').css('left', -navMenuWidth)
  $('#side-nav').css('left', '0px')
  $('.fa-align-justify').css('display', 'block')
  $('.fa-xmark').css('display', 'none')
})

// request API:
const apiKey = '968f163fffd1a2f37aa87081d73355b1'
const imgURL = 'https://image.tmdb.org/t/p/w500'
let mTitle, mOverview, mRate, mDate, mImg

async function getMovies() {
  let apiRespone = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
  )
  let finalResult = await apiRespone.json()
  // for (let i = 0; i < finalResult.results.length; i++) {
  //   //get title:
  //   if (finalResult.results[i].original_name == undefined) {
  //     mTitle = finalResult.results[i].original_title
  //   } else {
  //     mTitle = finalResult.results[i].original_name
  //   }
  //   // console.log('movie-title:', mTitle)

  //   //get overview:
  //   mOverview = finalResult.results[i].overview
  //   // console.log('overview:', mOverview)

  //   //get rate:
  //   mRate = parseFloat(finalResult.results[i].vote_average).toFixed(1)
  //   // console.log('rate:', mRate)

  //   //get date:
  //   mDate = finalResult.results[i].first_air_date
  //   // console.log('date:', mDate)

  //   //get image:
  //   mImg = imgURL + finalResult.results[i].poster_path
  //   // console.log('image:', mImg)
  // }

  displayMovies(finalResult.results)
}

getMovies()

function displayMovies(data) {
  $('#movies .row').innerHTML = ``
  let mCard = ``

  for (let i = 0; i < data.length; i++) {
    // console.log(data[i])
    //get title:
    if (data[i].original_name == undefined) {
      mTitle = data[i].original_title
    } else {
      mTitle = data[i].original_name
    }
    // console.log('movie-title:', mTitle)

    //get overview:
    mOverview = data[i].overview
    // console.log('overview:', mOverview)

    //get rate:
    mRate = parseFloat(data[i].vote_average).toFixed(1)
    // console.log('rate:', mRate)

    //get date:
    if (data[i].first_air_date == undefined) {
      mDate = data[i].release_date
    } else {
      mDate = data[i].first_air_date
    }
    // console.log('date:', mDate)

    //get image:
    mImg = imgURL + data[i].poster_path
    console.log('image:', mImg)

    mCard += `
          <div class="col-md-6 col-lg-4 my-3">
          <div class="movie rounded position-relative">
            <div class="poster">
              <img
                src="${mImg}"
                alt="movie poster"
                class="img-fluid"
              />
              <div class="layer d-flex align-items-center px-2">
                <div class="info">
                  <h2>${mTitle}</h2>
                  <p>
                    ${mOverview}
                  </p>
                  <p class="rate">rate : ${mRate}</p>
                  <p class="date">${mDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
          `

    document.querySelector('#movies .row').innerHTML = mCard
  }
}

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
