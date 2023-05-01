import React from 'react';
import './news.css'
const News = () => {
  return (
    <div className="news-section">
      <div className="background-image"></div>
      <div className="content-wrapper">
        <div className="left-poster"></div>
        <div className="right-content">
          <h1 className='news-heading'>News & Updates</h1>
          <p className='news-content'>Notice for Prospective Students</p>
          <p className='news-content'>Admissions Open Spring 2023</p>
          <p className='news-content'>Merit Scholarship</p>
          <p className='news-content'>75% and above 25% Scholarship</p>
          <p className='news-content'>Siblings 20% Scholarship</p>
          <br></br><br></br>
          <p className='news-content'>Entry test will be held on 11th February 2023</p>
          <p className='news-content'>Result Awaiting Students can also apply</p>
        </div>
      </div>
    </div>
  );
};

export default News;
