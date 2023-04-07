import { Link, useNavigate } from "react-router-dom";
import toast,{Toaster} from 'react-hot-toast'
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { SimpleFooter } from "@/widgets/layout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export function SignUp() {
  const user = useSelector((state)=>state.user.userInfo)
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [answer,setAnswer] = useState("")

  const navigate = useNavigate()

  const handleClick = async()=>{
    try {
      const data = await axios.post("http://localhost:5000/auth/register",{
        name,
        email,
        password,
        answer
      })
      console.log(data)
      navigate('/sign-in')
    } catch (error) {
      console.log(error.response.data.message)
      toast.error(error.response.data.message,{
        duration:4000,
        position:'top-center',
        style:{background:"red",color:"white"}
      })
    }
  }
  useEffect(()=>{
    user && navigate('/home')
  },[navigate,user])

  return (
    <>
     <Toaster />
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign Up
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input onChange={(e)=>setName(e.target.value)} variant="standard" label="Name" size="lg" />
            <Input onChange={(e)=>setEmail(e.target.value)} variant="standard" type="email" label="Email" size="lg" />
            <Input
            onChange={(e)=>setPassword(e.target.value)}
              variant="standard"
              type="password"
              label="Password"
              size="lg"
            />
            <Input onChange={(e)=>setAnswer(e.target.value)} variant="standard" type="text" label="Answer" size="lg" />

          </CardBody>
          <CardFooter className="pt-0">
            <Button onClick={handleClick} variant="gradient" fullWidth>
              Sign Up
            </Button>
           
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </div>
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
}

export default SignUp;
