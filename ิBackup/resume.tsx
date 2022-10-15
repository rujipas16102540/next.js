import React, { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
// import "../styles/resume.css"

const Resume: NextPage = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/profile-data')
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No profile data</p>
    return (
        <div>
            <header style={{ background: "black", color: "white", height: "10vh", alignItems: "center", display: "flex", position: "sticky", top: "0" }}>
                <div >
                    <Link href='http://localhost:3000'>
                        <a>
                            Resume
                        </a>
                    </Link>
                </div>
                <div >
                    <a>
                        rcc
                        rfc
                        rfce
                    </a>
                </div>
            </header>
            <div style={{ display: "flex", height: "150vh", background: "red" }}>resume</div>
            <div>
                {/* <h1>{data.name}</h1>
                <p>{data.bio}</p> */}
            </div>

        </div>
    )
}

export default Resume



