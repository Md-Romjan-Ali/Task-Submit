const serverUri = process.env.NEXT_PUBLIC_SERVER_URI
export interface TaskData {
    task: string,
    email: string,
    image: string
}
export const postSubmitData = async (task: TaskData) => {
    const res = await fetch(`${serverUri}/api/posttask`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    return res.json()
}