import { useState } from 'react';

const useGetPosts = (url) => {

    const [data, setData] = useState(async () => {
        try {
            await fetch(url)
                .then(res => res.json())
                .then(data => {
                    localStorage.setItem("user", data[0])
                    setData(data)
                })
        } catch (err) {
            setData({ error: err.message })
        }
    })

    return [data]
}

export default useGetPosts;