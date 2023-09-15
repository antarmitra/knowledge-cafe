import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';


const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
    const { title, cover, author_img, author, reading_time, posted_date, hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />

            <div className='flex justify-between mb-5'>
                <div className='flex items-center'>
                    <img className='w-14' src={author_img}></img>
                    <div className='ml-5'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p className='text-slate-500'>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <span className='text-slate-500'>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='text-xl ml-2'><FaBookmark></FaBookmark></button>
                </div>
            </div>

            <h2 className='text-4xl mb-2'>{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span className='text-xl text-slate-500' key={idx}><a href=''>   #{hash}</a></span>)
                }
            </p>
            <button onClick={() => handleMarkAsRead(reading_time)} className='text-purple-400 font-bold underline' >Mark-As-Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
    // handleAddToBookmark: PropTypes.func.isRequired
};

export default Blog;