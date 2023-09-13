import "./App.css";
import Header from "./components/Header/Header";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import { useState } from "react";


function App() {
const [bookmarks, setBookmarks] = useState([]);
const [readingTime, setReadingTime] = useState(0);


const handleAddToBookmark = blog =>{
  const newBookmarks = [...bookmarks, blog];
  setBookmarks(newBookmarks);
}

const handleMarkAsRead = time =>{
  const newReadingTime = readingTime + time;
  setReadingTime(newReadingTime);
}


  return (
    <>
      <div className="max-w-4xl mx-auto">
        <Header></Header>
        <div className="md:flex mt-4 gap-6">
          <Blogs 
          handleAddToBookmark={handleAddToBookmark}
          handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks 
          bookmarks={bookmarks}
          readingTime={readingTime}
          ></Bookmarks>
        </div>
      </div>
    </>
  );
}

export default App;
