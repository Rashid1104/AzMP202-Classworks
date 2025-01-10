import React from 'react';
import "./index.css"

const BlogPosts = () => {
  return (
    <div className="product py-5">
      <div className="container">
        <div className="text-center mb-5">
          <span className="Popular-Products">Blog</span>
          <h1 className="Our-Products">Blog Posts</h1>
        </div>
        <div className="row BlogPosts">
        <div className="col-4 text-left">
<img src="https://preview.colorlib.com/theme/selling/images/model_1_bg.jpg.webp" alt="" width={350}/>
<div>
   <h3 className='h3-texts mt-4'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</h3>
<p><span className='Ham-Brook-texts'>Ham Brook • Jan 18, 2019•</span> <span className='span-news'>News</span></p>

<p className='p-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p> 
<a href="#" className='text-warning'>Continue Reading...</a>

</div>
        </div> 
        <div className="col-4 text-left">
<img src="https://preview.colorlib.com/theme/selling/images/product_1_bg.jpg.webp" alt="" width={350}/>
<div>
   <h3 className='h3-texts mt-4'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</h3>
<p><span className='Ham-Brook-texts'>Ham Brook • Jan 18, 2019•</span> <span className='span-news'>News</span></p>
<p className='p-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p> 
<a href="#" className='text-warning'>Continue Reading...</a>
</div>
        </div>
        <div className="col-4 text-left">
<img src="https://preview.colorlib.com/theme/selling/images/model_5_bg.jpg.webp" alt="" width={350}/>
<div>
   <h3 className='h3-texts mt-4'>
   Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</h3>
<p><span className='Ham-Brook-texts'>Ham Brook • Jan 18, 2019•</span> <span className='span-news'>News</span></p>

<p className='p-texts'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.</p> 
<a href="#" className='text-warning'>Continue Reading...</a>

</div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;