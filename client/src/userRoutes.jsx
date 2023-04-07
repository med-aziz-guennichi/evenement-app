import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
    HomeIcon,
    UserCircleIcon,
    ArrowRightOnRectangleIcon,
    UserPlusIcon,
    DocumentTextIcon,
  } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { logout } from "./redux/apiCalls";

  
  export const userRoutes =
    
  [
    
    {
        icon: HomeIcon,
        name: "home",
        path: "/home",
        element: <Home />,
      },
      {
        icon: UserCircleIcon,
        name: "profile",
        path: "/profile",
        element: <Profile />,
      },
     
     
      {
        icon: DocumentTextIcon,
        name: "Docs",
        href: "https://www.material-tailwind.com/docs/react/installation",
        target: "_blank",
        element: "",
      },
  
  ]
  

  export default userRoutes