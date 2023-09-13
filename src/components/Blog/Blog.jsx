import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
//   console.log(blog);
  const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="">
      <img
        className="w-full"
        src={cover}
        alt={`Cover picture of the title ${title}`}
      />
      <div className="flex justify-between items-center my-4">
        <div className="flex items-center gap-4">
          <img className="w-16" src={author_img} alt="" />
          <div>
            <p className="text-lg font-bold">{author}</p>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <span>{reading_time}</span> min read
          <button
          onClick={() => handleAddToBookmark(blog)} className="text-red-600">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-bold">{title}</h1>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">#{hash}</a>{" "}
          </span>
        ))}
      </p>
      <button className="underline py-4 text-sm text-purple-600 font-semibold" onClick={() => handleMarkAsRead(reading_time)}>
        Mark as read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func
};
export default Blog;
