import React from 'react';

function BlogPost({ title, content }) {
  return (
    <div className="mb-5">
      <h2>{title}</h2>
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default BlogPost;
