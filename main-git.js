import './asdc.css'

const content=[
  {id:"1",link:"https://s3.ap-south-1.amazonaws.com/awsimages.imagesbazaar.com/1200x1800-new/16001/SM668008.jpg",featuring:"CHARLES",heading:"PARTY",location:"JUST BLR",contact:"99856214741"}
]
const body=document.querySelector('.body')

body.innerHTML +=`<!-- nav bar -->
<div class="top  p-1 rounded-2xl ">
      <nav class="flex justify-between p-[13px] rounded-[30px]
m-[3px] mt-[6px]">
        <div class="brand_name  w-[100px] text-xl text-center rounded-[10px]">BARS</div>
        <div class="filter w-[220px] rounded-[10px] flex justify-center items-center h-[34px]"><input type="search " class="search rounded-[14px] h-[26px] m-[2px]"><button class="search rounded-[14px] h-[26px] m-[2px]">🔍</button></div>
      </nav>
   </div>`

content.forEach(post=>{body.innerHTML +=`
<!-- parties -->
<div class="parties w-[80vw] h-[25vh] md:h-[30vh] lg:h-[60vh]  mt-3 mb-0 rounded-b-[1.27rem] rounded-t-[2rem]">
    <div class="heading text-3xl w-[100%]  text-center rounded-t-[3rem]">${post.heading}</div>
      <figure class="image w-[90%] h-[60%] lg:h-[80%] rounded-b-[20px]"><img src="${post.link}"></img></figure>
      <div class="description text-center flex flex-col justify-center">${post.featuring}</div><div class="button flex justify-center rounded-b-[1.25rem] "><button class="book" data-id="${post.id}" id="${post.id}">BOOK MY SHOW</button></div>
   </div>`;
   
  

})

 //second page

  body.addEventListener('click',(e)=>{
    if(e.target.classList.contains('book')){
      const party_id=e.target.dataset.id
      const post =content.find(post=>post.id===party_id)
      console.log(post);
      body.innerHTML=` <!-- parties -->
<div class="parties w-[80vw] h-[25vh] md:h-[30vh] lg:h-[60vh]  mt-3 mb-0 rounded-b-[1.27rem] rounded-t-[2rem]">
    <div class="heading text-3xl w-[100%]  text-center rounded-t-[3rem]">${post.heading}</div>
      <figure class="image w-[90%] h-[60%] lg:h-[80%] rounded-b-[20px]"><img src="${post.link}"></img></figure>
      <div class="description text-center flex flex-col justify-center">${post.featuring}</div><div class="button flex justify-center rounded-b-[1.25rem] "><button class="book" data-id="${post.id}" id="${post.id}">BOOK MY SHOW</button></div>
   </div>
   <!-- party data -->
  <div class="parties_data min-h-[50vh] w-[80vw] mt-[3vh] rounded-b-[1.27rem] rounded-t-[2rem] flex flex-col justify-center">
    <div class="list ">
      <div class="item">
        <div class="info">LOCATION :</div>
        <div class="info">${post.heading}</div>
      </div>
      <div class="item">
        <div class="info">TIME :</div>
        <div class="info">JUST BLR</div>
      </div>
      <div class="item">
        <div class="info">DATE :</div>
        <div class="info">JUST BLR</div>
      </div>
      <div class="item">
        <div class="info">CONTACT :</div>
        <div class="info">${post.contact}</div>
      </div>
      <div class="item">
        <div class="info">PRICE :</div>
        <div class="info">JUST BLR</div>
      </div>
      <div class="item">
        <div class="info">INSTA  :</div>
        <div class="info">JUST BLR</div>
      </div>
    </div>
  </div>`

    }
  })