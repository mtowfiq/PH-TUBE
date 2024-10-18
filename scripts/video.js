// Load and show categories on html

function getTimeString(time){
    const hours = parseInt(time/3600);
    const remainingSecondsFromHours = time % 3600;
    const minutes = parseInt(remainingSecondsFromHours / 60)
    const seconds = remainingSecondsFromHours % 60;
    return `${hours}hrs ${minutes} mins ${seconds} seconds ago`
}

const removeActiveBtn = () =>{
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons)
    for(let btn of buttons){
        btn.classList.remove("active")
    }
}

const loadCategories = () =>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(err => console.log("The error is: ", err))
}

const loadVideos = (searchText = "") =>{
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res => res.json())
        .then(data => displayVideos(data.videos))
        .catch(err => console.log("The error is: ", err))
}

const loadDetails = async (id) =>{
    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    displayDetails(data.video)
}

const displayDetails = (video) =>{
    console.log(video)
    const detailsContainer = document.getElementById("modal-content")
    detailsContainer.innerHTML = `
        <img src=${video.thumbnail}/>
        <p>${video.description}</p>
    `
    // 1st way of showing modal
    // document.getElementById("showModal").click();
    // 2nd way
    document.getElementById("my_modal_5").showModal();

}

const loadCategoryVideos = (id) =>{
    // alert(id)
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
    .then(res => res.json())
    .then(data => {
        const activeBtn = document.getElementById(`btn-${id}`)
        // console.log(activeBtn)
        removeActiveBtn();
        activeBtn.classList.add("active")
        displayVideos(data.category)
    })
    .catch(err => console.log("The error is: ", err))
}

const displayVideos = (videos) =>{
    const videosContainer = document.getElementById("videos")
    videosContainer.innerHTML = "";

    if(videos.length == 0){
        videosContainer.classList.remove("grid")
        videosContainer.innerHTML = `
        <div class="flex flex-col gap-5 min-h-[300px] justify-center items-center">
            <img src="images/Icon.png"/>
            <h2 class="text-center font-bold text-xl">No content here in this category</h2>
        </div>
        `
        return;
    }
    else{
        videosContainer.classList.add("grid")
    }


    videos.forEach(video =>{
        const div = document.createElement("div")
        div.classList = "card card-compact"
        div.innerHTML = `
          <figure class="h-[200px] relative">
            <img
            src= ${video.thumbnail}
            alt="Shoes" class="w-full h-full object-cover" />
            ${
                video.others.posted_date?.length == 0 ? "" 
                : `<span class="absolute text-xs right-2 bottom-2 p-1 bg-black text-white">${getTimeString(video.others.posted_date)}</span>`
            }
        </figure>
        <div class="py-2 flex gap-2">
            <div>
                <img src=${video.authors[0].profile_picture} class="rounded-full w-10 h-10 object-cover"/>
            </div>
            <div class="">
                <h2 class="font-bold">${video.title}</h2>
                <div class="flex gap-2 items-center">
                    <p class="text-gray-400">${video.authors[0].profile_name}</p>
                    ${
                        video.authors[0].verified == true ? `<img src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" class="w-5"/>`
                        : ""
                    }
                </div>
                <p><button onclick="loadDetails('${video.video_id}')" class="btn btn-sm btn-error">Details</button></p>
            </div>
        </div>
        `
        videosContainer.appendChild(div)
    })
}

const displayCategories = (data) =>{
    const categoriesContainer = document.getElementById("categories-container")
    data.forEach(item => {
        const buttonContainer = document.createElement("div")
        buttonContainer.innerHTML = `
            <button id="btn-${item.category_id}" onclick="loadCategoryVideos(${item.category_id})" class="btn category-btn">
                ${item.category}
            </button>
        `
        // button.classList = "btn"
        // // When to use .classlist.add and when just .classlist 
        // button.innerText = item.category

        categoriesContainer.appendChild(buttonContainer)
    })
}

document.getElementById("search-input").addEventListener("keyup", (e) =>{
    loadVideos(e.target.value)
})

loadCategories();
loadVideos();
