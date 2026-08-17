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
    return fetchData(`/api/getsubmitbyemail?email=${email}`)
}
// all user
export const alluser = async () => {
    return fetchData(`/api/getuser`)
}