import { update } from '@/redux/apiCalls'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const ChangeInfo = ({user}) => {

    const dispatch = useDispatch()

    const [name,setName]= useState("")
    const [email,setEmail] = useState("")
    const [location,setLocation] = useState("")
    const [phone,setphone] = useState("")
    const [image,setImage] = useState("")

const navigate = useNavigate()

    const updateHandler = (e)=>{
        e.preventDefault()
        try {
            update(dispatch,{
                _id:user._id,
                name,
                email,
                location,
                phone,
                image
            })
           
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <>
      <div className="flex items-center justify-center p-12">
  
  <div className="mx-auto w-full max-w-[550px]">
    <form onSubmit={updateHandler}>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="fName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
               Name
            </label>
            <input
            onChange={(e)=>setName(e.target.value)}
              type="text"
              name="fName"
              id="fName"
              placeholder="name"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            //   defaultValue={name}
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              email
            </label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              name="lName"
              id="lName"
              placeholder="email"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                // defaultValue={email}
            />
          </div>
        </div>
        <div className="w-full px-3 sm:w-1/2">
          <div className="mb-5">
            <label
           
              for="lName"
              className="mb-3 block text-base font-medium text-[#07074D]"
            >
              Location
            </label>
            <input
             onChange={(e)=>setLocation(e.target.value)}
              type="text"
              name="lName"
              id="lName"
              placeholder="Location"
              className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                // defaultValue={location}
           />
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          phone
        </label>
        <input
        onChange={(e)=>setphone(e.target.value)}
          type="text"
          name="guest"
          id="guest"
          placeholder=""
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            // defaultValue={phone}
       />
      </div>
      <div className="mb-5">
        <label
          for="guest"
          className="mb-3 block text-base font-medium text-[#07074D]"
        >
          image
        </label>
        <input
        onChange={(e)=>setImage(e.target.files[0])}
          type="file"
          name="guest"
          id="guest"
          placeholder=""
          min="0"
          className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            // defaultValue={phone}
       />
      </div>

      

      <div>
        <button
          className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</div>
    </>
  )
}

export default ChangeInfo
