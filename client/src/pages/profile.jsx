import {
  Avatar,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { Fragment, useEffect, useState } from "react";

import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";
import { deleteAccount, logout } from "@/redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import ChangeInfo from "@/components/ChangeInfo";
import { useNavigate } from "react-router-dom";
import ChangeImage from "@/components/ChangeImage";

export function Profile() {
  const [open, setOpen] = useState(false);
  const [openAre, setOpenAre] = useState(false);

  const handleOpen = () => setOpen(!open);
  const handleOpenAre = () => setOpen(!openAre);
  const serverPublic = "http://localhost:5000/images/";

  const navigate = useNavigate();

  const user = useSelector((state) => state.user.userInfo);
  const userId = user?._id;
  const dispatch = useDispatch();
  const logoutHandler = (e) => {
    logout(dispatch);
  };

  // const deleteHandler = (e)=>{

  //   try {
  //     deleteAccount(dispatch,userId)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  useEffect(() => {
    user;
  }, [user]);

  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 px-4 py-16">
        <div className="container mx-auto">
          <div className="relative -mt-64 mb-6 flex w-full min-w-0 flex-col break-words rounded-3xl bg-white shadow-xl shadow-gray-500/5">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="flex w-full justify-center px-4 lg:order-2 lg:w-3/12">
                  <div className="relative">
                    <div className="-mt-20 w-40">
                      <img
                        src={
                          user?.image
                            ? "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
                            : `http://localhost:5000/public/images/${user?.image}`
                        }
                        alt="Profile picture"
                        variant="circular"
                        className="h-full w-full shadow-xl"
                      />
                      <ChangeImage user={user} />
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button
                    onClick={handleOpen}
                    variant="gradient"
                    className="bg-blue-400"
                  >
                    Edit Profile
                  </Button>
                  <Button onClick={() => {}} className="ml-5 mr-5" color="red">
                    Delete Account
                  </Button>
                </div>
                <div className="mt-10 flex w-full justify-center px-4 lg:order-3 lg:mt-0 lg:w-4/12 lg:justify-end lg:self-center">
                  <Button
                    onClick={logoutHandler}
                    className="ml-5 mr-5 bg-red-400 hover:bg-red-200 "
                  >
                    logout
                  </Button>
                </div>
                <Dialog open={open} handler={handleOpen}>
                  <DialogBody>
                    <ChangeInfo user={user} />
                  </DialogBody>
                </Dialog>

                {/* <Fragment>
      <Button onClick={handleOpenAre} variant="gradient">
        Open Dialog
      </Button>
      <Dialog open={openAre} handler={handleOpenAre}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody divider>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus ad
          reprehenderit omnis perspiciatis aut odit! Unde architecto
          perspiciatis, dolorum dolorem iure quia saepe autem accusamus eum
          praesentium magni corrupti explicabo!
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpenAre}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={handleOpen}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </Fragment>
        */}
              </div>
              <div className="my-8 text-center">
                <Typography variant="h2" color="blue-gray" className="mb-2">
                  {user?.name}
                </Typography>
                <div className="mb-16 flex items-center justify-center gap-2">
                  <MapPinIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    {user?.location}
                  </Typography>
                </div>
                <div className="mb-2 flex items-center justify-center gap-2">
                  <PhoneIcon className="-mt-px h-4 w-4 text-blue-gray-700" />
                  <Typography className="font-medium text-blue-gray-700">
                    {user?.phone}
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default Profile;
