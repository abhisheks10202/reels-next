import React, { useContext, useEffect } from 'react'
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
// Next inbuilt Image
import Image from 'next/image';
import insta from '../../assets/insta.jpg';
// import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import bg1 from '../../assets/bg1.jpg'
import bg2 from '../../assets/bg2.jpg'
import bg3 from '../../assets/bg3.jpg'
import { AuthContext } from '../../context/auth';
import { useRouter } from 'next/router';
import Link from 'next/link';

function Index() {

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { login,user } = useContext(AuthContext)

    const handleClick = async() => {
        try{
            setLoading(true)
            setError('')
            await login(email, password)
            console.log("Logged in!")
        }catch(err){
            console.log(err)
            setError(err.message)
            setTimeout(()=>{
                setError('')
            },2000)
        }
        setLoading(false)
    }

    useEffect(()=>{
        console.log("login aaya")
        if(user?.uid){
            console.log(user)
            console.log(user=="")
            console.log(user==null)
            console.log("user not equal to null")
            router.push('/')
        }
        else{
            console.log("Not logged in");
        }
    },[user])

    return (
        <div className="login-container">
            <div className="carbg">
                <div className='car'>
                <Carousel
            fade
            nextLabel=""
            prevLabel=""
            controls={false}
            indicators={false}
            interval="3000"
          >
            <Carousel.Item>
              <Image src={bg1} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={bg2} className="d-block w-100" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={bg3} className="d-block w-100" />
            </Carousel.Item>
          </Carousel>
                </div>
            </div>
            <div>
                <div className='login-card'>
                    <Image src={insta} />

                    <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <TextField size="small" margin='dense' id="outlined-basic" fullWidth
                        label="Password" type="password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} />

                    {
                        error != '' &&
                        <div style={{ color: 'red' }}>{error}</div>
                    }

                    <Button variant="contained" fullWidth
                        style={{ marginTop: '1rem' }} onClick={handleClick} disabled={loading}>
                        Login In
                    </Button>
                    <div style={{ color: 'blue', marginTop: '0.5rem' }}>Forgot Password ?</div>

                </div>
                <div className='bottom-card'>
                    Don&apos;t Have an Account? <Link href="/signup"><span style={{ color: 'blue' }}>Sign Up</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Index
