const port = "https://transit-track-backend.onrender.com" 
// const localport = "https://localhost:8080"

interface Signup{
    email: string
    name: string
    password: string
    vehicleType?: string
    transitCompany: string
}

export const Sign = async (req:Signup) =>{
    let fetchRes = await fetch(port + "/api/signup", {
        method: 'post',
        headers:{
            Accept: "application/json",
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
    let resText = await fetchRes.text()

    return JSON.parse(JSON.stringify(resText))
}