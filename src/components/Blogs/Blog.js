import React, { useState } from 'react';
import useCollapse from 'react-collapsed';

const Blog = (props) => {
    const blog = props.blog
    const [isExpanded, setExpanded] = useState(false);
    const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
    const blogDescription = blog?.blogDescription.replace(/([.?!])\s*(?=[A-Z])/g, "$1|").split("|");
    let shortDescription = '';
    let longDescription = '';
    for(let i=0; i<blogDescription.length; i++){
        if(i<3){
            shortDescription += blogDescription[i];
        }
        else{
            longDescription +=blogDescription[i];
        }
    }
    // console.log(blogDescription);

    return (
        <div>
            <div className="row">
                {/* image  */}
                <div className="col-lg-4">
                    <img src={blog.blogImage} className='img-fluid' alt="" />
                </div>
                {/* heading */}
                <div className="col-lg-8">
                    <h1>{blog.blogTitle}</h1>
                    <p>
                        <span className='pe-3'>{blog.date}</span>
                        <span className='pe-3'>{blog.readingTime} min read</span>
                        <span><i className="fa-solid fa-comment px-2"></i>1</span>
                        <span><i className="fa-solid fa-fire  px-2"></i>1</span>

                    </p>
                </div>
            </div>
            {/* description */}
            <div>
                <p style={{ textAlign: 'justify', transitionDuration: '.5s' }}>
                    
                    {/* {isExpanded ? <p {...getCollapseProps()}>{blog.blogDescription}</p> : <>{blog.blogDescription.slice(0, 210)}</>} */}
                    {shortDescription}
                    {/* <p {...getCollapseProps()}>{blog.blogDescription}</p> */}
                    <p {...getCollapseProps()}>{ longDescription}</p>
                </p>

                <div>
                    {/* tags */}
                    <div className="d-flex">


                        {blog.tag1 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag1}</div> : null}
                        {blog.tag2 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag2}</div> : null}
                        {blog.tag3 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag3}</div> : null}
                        {blog.tag4 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag4}</div> : null}
                        {blog.tag5 ? <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag5}</div> : null}
                        {/* <div className='me-2 px-3 py-1 shadow-sm'>#{blog.tag2}c</div>
                                                    <div className='me-2 px-3 py-1 shadow-sm'>#Music</div> */}


                    </div>




                </div>
                <div className='text-center py-3'>
                    {/* <button onClick={showMore} className='btn green-cyan-btn'>{showmore ? 'Show Less' : 'Continue Reading'}</button> */}
                    <button {...getToggleProps({
                        onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                    })} className='btn green-cyan-btn'>{isExpanded ? 'Show Less' : 'Continue Reading'}</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;