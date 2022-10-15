import Head from 'next/head'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const CreateAccount = () => {
    return (
        <div className='bg-create-account'>
            <Head>
                <title>Create an Account</title>
                <meta name="Create an Account" content="Create an Account" />
            </Head>
            <div className='navbar' >
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                <div className='btn-login'>
                    <a>เข้าร่วมเลย</a>
                    <a>ลงชื่อเข้าใช้</a>
                    <a>ผู้ประกอบการเข้าสู่ระบบ</a>
                </div>
            </div>

            <div>
                <div className='fromCreateAccount'>
                    <div>
                        Create an Account
                    </div>
                    <p>
                        Already have an account? <Link href={'http://localhost:3000'}><a>Sign in</a ></Link>
                    </p>

                    <p>
                        <label>Email address</label>
                        <input className="input-create-account" type="text" />
                    </p>
                    <div className="d-grid gap-2 d-sm-flex ">
                        <p >
                            <label>Firstname</label>
                            <input type="text" className="input-create-account" />
                        </p>
                        <p>
                            <label>Lastname</label>
                            <input type="text" className="input-create-account" />
                        </p>
                    </div>
                    <p className="d-grid">
                        <label>Password</label>
                        <input type="text" className="input-create-account" />
                    </p>
                    <p className="d-grid">
                        <label>Confirm Password</label>
                        <input type="text" className="input-create-account" />
                    </p>
                    <div className="btn-create-account">
                        <button>Create account</button>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default CreateAccount