const serverUri = process.env.NEXT_PUBLIC_SERVER_URI
export const deleteTask = async (id: string) => {
    const res = await fetch(`${serverUri}/api/deletetask/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    return res.json()
}