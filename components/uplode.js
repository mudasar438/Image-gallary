import { useState, useRef } from "react";
import { useRouter } from "next/router";
import "firebase/storage";
import "firebase/firestore";
import Image from "next/image";

import { app } from "../firebase/firebaseConfig";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  getMetadata,
  listAll,
} from "firebase/storage";

const Uplode = () => {
  const [display, setDisplay] = useState([]);
  const [show, setShow]= useState(false)

  const inputEl = useRef(null);
  const storage = getStorage();
  const router = useRouter();
  const metadata = {
    contentType: "image/jpeg",
  };

  const [value, setValue] = useState("");
  const [file, setFile] = useState(null);
  const [myurl, setMyUrl] = useState("");

  const uplodingf = () => {
    var file = inputEl.current.files[0];
    setFile(file);
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        let n = progress.toFixed(1);
        setValue(n);
        setShow()
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;

          // ...

          case "storage/unknown":
            break;
        }
      }
    );
  };

  const downlodeImages = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, "images/" + file.name);
    getDownloadURL(storageRef)
      .then((url) => {
        // console.log(url)
        setMyUrl(url);
      })
      .catch((error) => {
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            break;
        }
      });
  };

  const showData = () => {
    const forestRef = ref(storage, "images");
    // const   storage =  getStorage();
    listAll(forestRef)
      .then((res) => {
        res.prefixes.map((folderRef) => {});
        // console.log(res.items,'items')
        Promise.all(
          res.items.map((item) => {
            return getDownloadURL(item);
          })
        )
          .then((items) => {
            console.log(items, "items");
            setDisplay(items);
          })
          .catch((error) => {
            console.error(error);
          });
        // getDownloadURL(res.items[0]).then(some=>{
        //   console.log(some,"some")
        // })
        // .catch(error=>{
        //   console.error(error)
        // })
        // setDisplay(res.items)
      })
      .catch((error) => {
        // Uh-oh, an error occurred!
      });

    // getMetadata(forestRef)
    //   .then((metadata) => {
    //     console.log(metadata)

    //   })
    //   .catch((error) => {

    //   });
  };
  const logout = () => {
    router.push("/");
  };
  const chating = () => {
    router.push("/chat");
  };

  console.log("Myimages : " + file);

  return (
    <>
      <div className="">
        <div className="w-full ">
          <div className=" flex justify-end  ">
            <div className=" p-2 mt-5 w-[10%] mr-10 font-bold text-center rounded-md text-2xl bg-blue-300 ">
              <button onClick={logout}>Logout</button>
            </div>
            <div className=" p-2 mt-5 w-[10%] mr-10 font-bold text-center rounded-md text-2xl bg-blue-300 ">
              <button onClick={chating}>Message</button>
            </div>
          </div>
          <div className=" w-full mx-auto  mt-10">
            {/* <h1 onClick={() => fetchBlogs()}>Hello</h1> */}
            <div className="flex w-[60%] mx-auto  mt-5 bgcolor p-10 items-center rounded-xl  justify-between">
              <div className="text-white  mx-auto ">
                <input className="p-3" type="file" ref={inputEl} multiple />

                <progress
                  className="pgrs"
                  id="file"
                  value={value}
                  max="100"
                ></progress>
                <p>Upload is {value} % </p>
              </div>
              <div className="bg-blue-300 rounded  py-2 px-5">
                <button className="" onClick={uplodingf}>
                  Uplode{" "}
                </button>
              </div>
            </div>

            <div className="text-white  mx-auto ">
              <div className="bgcolor p-5 mt-5 w-[20%] mx-auto font-bold text-center rounded-md text-2xl">
                <button onClick={downlodeImages}>Preview</button>
              </div>

              <div className=" flex justify-center mx-auto mt-5">
                <img
                  className="rounded-2xl"
                  src={myurl || "https://via.placeholder.com/50"}
                  width="300"
                  height="200"
                />
              </div>
              <div className="bgcolor p-5 mt-5 w-[20%] mx-auto font-bold text-center text-xl rounded-xl">
                <button className=" " onClick={() => showData()}>
                  Cloud Gallery
                </button>
              </div>
            </div>

            <div className="flex">
              {display.map((item, id) => {
                return (
                  <div className="flex w-full">
                    <div className="">
                      <div className="" key={id}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 mx-20 p-5 ">
            {display.map((data, id) => {
              return (
                <div class="w-full p-1 md:p-2">
                  <Image
                    src={data}
                    alt=""
                    width="300"
                    height="300"
                    class="block object-cover object-center w-full h-full rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Uplode;
