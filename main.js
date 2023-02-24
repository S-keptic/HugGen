let genereteResponse = document.getElementById('btn')
let download = document.getElementById('btn2');
let img = document.getElementById('img');


const gen = async ()=>{
const data = await fetch('https://api.waifu.pics/sfw/hug')
    let response = await data.json()
    let result = response.url
    img.innerHTML = `<img src=${result} alt="loading..">`
    console.log(result)

    return result;

}

let down = gen();

const save = ()=>{
    document.open(down)
}      







document.getElementById('img').innerHTML = gen();





genereteResponse.onclick = async ()=>{


    gen();

}
