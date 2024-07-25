import React, { useState } from "react";
import Navbar from "./Navbar";
import Manager from "./Manager";
import ManagerDisplay from "./ManagerDisplay";
import { useEffect } from "react";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  const [inputs, setInputs] = useState([]);
  function addClick(newInput) {
    setInputs((prevItems) => {
      return [...prevItems, newInput];
    });
    toast.success("Password Saved!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  }
  function deleteClick(id) {
    setInputs((prevItem) =>
      prevItem.filter((inputItem, index) => {
        return index !== id;
      })
    );
    toast.success("Password Deleted!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }
  function copyClick(url, user, pass) {
    const textToCopy = `URL: ${url}\nUser: ${user}\nPassword: ${pass}`;
    toast.success("Copied to Clipboard!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    console.log(textToCopy);
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard successfully!");
      })
      .catch((err) => {
        console.error("Failed to copy text to clipboard: ", err);
      });
  }

  // Using useEffect hook we can acess local storage/disk and save passwords there.
  const [passwordArray, setPasswordArray] = useState([]);
  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setPasswordArray(JSON.parse(passwords));
    }
  }, []);
  function fakeClick() {
    setPasswordArray((prevItems) => {
      const updatedItems = [...prevItems, inputs];
      localStorage.setItem("passwords", JSON.stringify([...prevItems, inputs]));
      return updatedItems;
    });
  }
  // Save passwords to local storage whenever passwordArray changes
  useEffect(() => {
    localStorage.setItem("passwords", JSON.stringify(passwordArray));
  }, [passwordArray]);

  
  // const fakeClick = () => {
  //     setPasswordArray([...passwordArray, inputs]);
  //     localStorage.setItem("passwords", JSON.stringify([...passwordArray, inputs]));
  //     console.log([...passwordArray, inputs]);
  // };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="wrapper">
        <Navbar />
        <div className="wrapper">
          <Manager onClick={addClick} fakeClicks={fakeClick} />
          {inputs.map((inputItem, index) => (
            <ManagerDisplay
              key={index}
              id={index}
              url={inputItem.url}
              user={inputItem.user}
              pass={inputItem.pass}
              isClicked={deleteClick}
              copyIsClicked={copyClick}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
}
