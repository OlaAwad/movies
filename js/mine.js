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
let cat = `movie/now_playing`

$('#now').click(function () {
  cat = 'movie/now_playing'
  getMovies()
})
$('#popular').click(function () {
  cat = 'movie/popular'
  getMovies()
})
$('#top').click(function () {
  cat = 'movie/top_rated'
  getMovies()
})
$('#trend').click(function () {
  cat = 'trending/all/day'
  getMovies()
})
$('#upcoming').click(function () {
  cat = 'movie/upcoming'
  getMovies()
})

async function getMovies() {
  let apiRespone = await fetch(
    // `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`,
    `https://api.themoviedb.org/3/${cat}?api_key=${apiKey}`,
  )

  let finalResult = await apiRespone.json()
  displayMovies(finalResult.results)
}

getMovies()
let mTitles = []
let mImgs = []
let mDates = []
let mRates = []
let mOverviews = []

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
    // console.log('image:', mImg)

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
    mTitles.push(mTitle)
    mImgs.push(mImg)
    mDates.push(mDate)
    mRates.push(mRate)
    mOverviews.push(mOverview)
  }
}

// Search:
function searchMovies(searchValue) {
  searchOutput = ``
  for (let i = 0; i < mTitles.length; i++) {
    if (mTitles[i].toLowerCase().includes(searchValue.toLowerCase())) {
      searchOutput += `
      <div class="col-md-6 col-lg-4 my-3">
      <div class="movie rounded position-relative">
        <div class="poster">
          <img
            src="${mImgs[i]}"
            alt="movie poster"
            class="img-fluid"
          />
          <div class="layer d-flex align-items-center px-2">
            <div class="info">
              <h2>${mTitles[i]}</h2>
              <p>
                ${mOverviews[i]}
              </p>
              <p class="rate">rate : ${mRates[i]}</p>
              <p class="date">${mDates[i]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      `
    }
  }
  document.querySelector('#movies .row').innerHTML = searchOutput
}

// Search by API:
async function searchAPI(val) {
  let searchAPIResponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${val}`,
  )

  let result = await searchAPIResponse.json()

  displayMovies(result.results)
}
