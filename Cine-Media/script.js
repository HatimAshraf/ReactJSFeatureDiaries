const URL = "https://cat-fact.herokuapp.com/facts"

let promise = fetch(URL)

const getFacts = async ()=>{
    let response = await fetch(URL);
    let data = await response.json()
    console.log(data)

}

getFacts()