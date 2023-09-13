import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3">
            <div className="bg-slate-300 text-center text-lg font-semibold text-purple-700 border-2 border-purple-800 p-4">
                <h3>Spent time on read: {readingTime}</h3>
            </div>
            <div className="bg-slate-200 py-4 mt-4">
            <h2 className="text-center text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes ={
    bookmarks: PropTypes.array.isRequired,
    readingTime: PropTypes.number
}
export default Bookmarks;