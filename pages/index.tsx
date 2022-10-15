import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-login'>
      <Head>
        <title>Resume</title>
        <meta name="resume" content="resume" />
      </Head>
      <div className='navbar' >
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <div className='btn-login'>
          <a>เข้าร่วมเลย</a>
          <a>ลงชื่อเข้าใช้</a>
          <a>ผู้ประกอบการเข้าสู่ระบบ</a>
        </div>
      </div>
      <div className='register'>
        <div >
          <a>Sign In</a>
          <div style={{ margin: "6% 0 8% 0" }}>
            <a style={{ marginRight: "8%" }}>
              <Image src="/asset/fb.png" alt="Facebook" width={70} height={70} className='img' />
            </a>
            <a>
              <Image src="/asset/gg.png" alt="Google" width={70} height={70} />
            </a>
          </div>
          <div className='or'>
            <span>Or</span>
          </div>
          <input type="text" className="styleInput1" placeholder="Email" />
          <input type="text" className="styleInput2" placeholder="Password" />
          <div>
            <button className='btn-signIn'>Sign in</button>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6%", fontSize: "calc(0.5vw + 0.5vh)", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <input type="checkbox" />
              <a>Remember me</a>
            </div>
            <div>
              <a>Need help?</a>
            </div>
          </div>
          <div style={{ fontSize: "calc(1vw + 1vh)" }}>
            <a style={{ color: "#8B0900" }}>New to Web</a> <Link href={'http://localhost:3000/createAccount'}><a style={{ textDecoration: "underline", color: "white" }}>sign up now</a></Link>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Home
