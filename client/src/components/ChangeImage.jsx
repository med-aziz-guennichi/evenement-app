import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
const ChangeImage = ({user}) => {
    // const [image,setImage] = useState("")




    // const SubmitImage = async(e)=>{
    // e.preventDefault()
    // const newImage = {
    //     userId:user._id,
    // }
    
    // const data = new FormData()


    // data.append("file", image);
    // data.append("upload_preset", "qriscptt");
    // data.append("cloud_name", "dkxqcxutp");
    
    // var newimage = image



    // fetch("https://api.cloudinary.com/v1_1/dkxqcxutp/image/upload", {
    //   method: "post",
    //   body: data,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setImage(data.url.toString())
    //     console.log(data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    //   try {
    //   const res =  await axios.patch('http://localhost:5000/user/updateImage/'+ user._id,newImage,setImage)
    //   console.log(res)
    //   } catch (error) {
    //     console.log(error)
    //   }

    // }

    const [image, setImage] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const dispatch = useDispatch();
  
    const updateImageHandler = async(e) => {
        e.preventDefault();

        //for upload image
        const newImage = {
            userId: user._id,
        };

        if(image) {
            const data = new FormData();
            const fileName = Date.now() + image.name; //for name of image
            data.append('name', fileName);
            data.append('file', image);
            newImage.image = fileName;

            try {

                await axios.post('http://localhost:5000/api/upload', data);
                setSuccess('Image uploaded successfully!');
                logout(dispatch);
                

            } catch(error) {
                setError('Error. Image not uploaded!');
            }
        }

        //for update image
        try {
           const data = await axios.patch('http://localhost:5000/user/updateImage/'+ user._id, newImage);
            setSuccess('Image updated successfully!');
            console.log(data)
        } catch(error) {
            setError('Error. Image not updated!');
        }
    }
  return (
    <>
       <form onSubmit={updateImageHandler}>
            <div className="updateImage">
                <label htmlFor="image" className='labelImage'>
                    {/* <FaImage /> */}
                </label>
                <input type="file" id='image' accept='.png, .jpg, .jpeg' onChange={(e) => setImage(e.target.files[0])} className='userImage' />
            </div>
            {image && <button>Update User Image</button>}
            {error && <span className='error'>{error}</span>}
            {success && <span className='success'>{success}</span>}
        </form>
    </>
  )
  }

export default ChangeImage

