const serverUri = process.env.NEXT_PUBLIC_SERVER_URI
export const getDataByEmail = async (email: string) => {
    const res = await fetch(`${serverUri}/api/getsubmitbyemail?email=${email}`)
    return res.json()
}
// all user
export const alluser = async () => {
    const res = await fetch(`${serverUri}/api/getuser`)
    return res.json()
}