import React from 'react';

function BlogLayout({ children }) {
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Our Blogs</h1>
      {children}
    </div>
  );
}

export default BlogLayout;
