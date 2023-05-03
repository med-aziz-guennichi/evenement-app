import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const DOrganis = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [id, setId] = useState(user?._id);
  const [message, setMessage] = useState("");
  const [active, setActive] = useState(false);

  const handleMessage = async (e) => {
    e.preventDefault();

    try {
      const data = await axios.post(
        "http://localhost:5000/message/create_message",
        {
          message,
          userId: user?._id,
        }
      );
      console.log(data);
      setActive(true);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(user._id);
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {user.role !== "user" ? (
        <></>
      ) : (
        <form>
          <input
            type="text"
            placeholder="hahaha"
            value={user?._id}
            defaultValue={user?._id}
            hidden={true}
          />
          <input
            type="text"
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
          />

          {active ? (
            <button style={{ color: "green", backgroundColor: "green" }}>
              Submit
            </button>
          ) : (
            <button onClick={handleMessage}>Submit</button>
          )}
        </form>
      )}
    </div>
  );
};

export default DOrganis;
