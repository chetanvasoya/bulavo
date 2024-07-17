import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const db = getFirestore();

const Blog = () => {
  const { postId } = useParams(); // Get postId from URL params
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const docRef = doc(db, 'blog', postId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setBlogPost(docSnap.data());
        } else {
          console.error("No such document!");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogPost();
  }, [postId]);

  if (!blogPost) {
    return <div style={{ textAlign: 'center', marginTop: '20px' }}>No blog post data available</div>;
  }

  // Format the timestamp
  const formattedDate = blogPost.submissionTime
    ? new Date(blogPost.submissionTime.seconds * 1000 + blogPost.submissionTime.nanoseconds / 1000000).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
    : "Unknown Date";

  return (
    <div style={{
      fontFamily: "'Helvetica Neue', Arial, sans-serif",
      color: '#333',
      lineHeight: 1.6,
      margin: 0,
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <header style={{
        textAlign: 'center',
        marginBottom: '20px',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          margin: '0',
        }}>
          {blogPost.blogTitle}
        </h1>
        <span style={{
          display: 'block',
          color: '#666',
          fontSize: '1rem',
          marginTop: '10px',
        }}>
          {formattedDate}
        </span>
      </header>

      <div style={{
        display: 'flex',
        gap: '20px',
      }}>
        <div style={{
          flex: '1',
          maxWidth: '400px',
        }}>
          <img
            src={blogPost.imageURL}
            alt="Blog"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
        </div>
        <div style={{
          flex: '2',
        }}>
          <article style={{
            fontSize: '1.1rem',
            lineHeight: 1.8,
          }}>
            {blogPost.content.split('\n').map((paragraph, index) => (
              <p key={index} style={{
                marginBottom: '1.5em',
              }}>
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>

      <footer style={{
        backgroundColor: '#f8f8f8',
        padding: '20px',
        textAlign: 'center',
        borderTop: '1px solid #eaeaea',
        marginTop: '40px',
      }}>
        <p style={{
          margin: 0,
          color: '#666',
        }}>
          © 2024 Bulavo All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Blog;
