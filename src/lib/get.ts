const serverUri = process.env.NEXT_PUBLIC_SERVER_URI
const fetchData = async (endPoint: string) => {
    const res = await fetch(`${serverUri}${endPoint}`, {
        cache: 'no-store'
    })
    return res.json()
}
export const getTask = async () => {
    return fetchData(`/api/getsubmit`)
}
export const getDataByEmail = async (email?: string) => {
    const res = await fetch(`${serverUri}/api/getsubmitbyemail?email=${email}`, {
        cache: 'no-store'
    })
    return res.json()
}
// all user
export const alluser = async () => {
    const res = await fetch(`${serverUri}/api/getuser`, {
        cache: 'no-store'
    })
    console.log(res.status, 'statuse');
    return res.json()
}