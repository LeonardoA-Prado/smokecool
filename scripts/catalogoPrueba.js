document.addEventListener('DOMContentLoaded', () => fetchData1());

const fetchData1 =  async () =>{
    try {
        const res  = await fetch("scripts/sabores.json")
        const data = await res.json
        console.log(data)
    }catch(error){
        console.log(error)
    }
}