import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

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
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { login } from "@/redux/apiCalls";
import axios from "axios";

export function SignIn() {
  const user = useSelector((state) => state.user.userInfo);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);
  const [auth, setAuth] = useState(null);

  const googleAuth = () => {
    window.open("http://localhost:5000/auth/google/callback", "_self");
  };

  const loginHandler = async (e) => {
    try {
      e.preventDefault();
      login(dispatch, { email, password });
    } catch (error) {
      toast.error("Invalid Email or Password", {
        duration: 4000,
        position: "top-center",
        style: { background: "red", color: "white" },
      });
    }
  };
  // if(error){
  //   toast.error("Invalid Email or Password",{
  //     duration:4000,
  //     position:'top-center',
  //     style:{background:"red",color:"white"}
  //   })
  // }

  useEffect(() => {
    user && navigate("/home");
  }, [user, navigate]);
  return (
    <>
      <Toaster />
      <img
        src="/img/background-2.jpg"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute left-2/4 top-2/4 w-full max-w-[24rem] -translate-x-2/4 -translate-y-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input
              onChange={(e) => setEmail(e.target.value)}
              variant="standard"
              type="email"
              label="Email"
              size="lg"
            />
            <Input
              onChange={(e) => setPassword(e.target.value)}
              variant="standard"
              type="password"
              label="Password"
              size="lg"
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              disabled={isFetching}
              onClick={loginHandler}
              variant="gradient"
              fullWidth
            >
              Sign In
            </Button>
            {/* {error && toast.error("invalid Email Or Password",{
               duration:4000,
                   position:'top-center',
                  style:{background:"red",color:"white"}
            })} */}
            <Button onClick={googleAuth}>Sign in with Google</Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
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

export default SignIn;
