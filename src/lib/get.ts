const serverUri = process.env.NEXT_PUBLIC_SERVER_URI

export const getTask = async () => {
    const res = await fetch(`${serverUri}/api/getsubmit`, {
        cache: 'no-store'
    })
    return res.json()
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