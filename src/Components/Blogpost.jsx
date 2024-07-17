import React, { useState } from 'react';
import './Blogpost.css';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBgtnPqJwIwea8HkSa0SJ43uL7LT8_pcnw",
    authDomain: "bulavo-70b5e.firebaseapp.com",
    databaseURL: "https://bulavo-70b5e-default-rtdb.firebaseio.com",
    projectId: "bulavo-70b5e",
    storageBucket: "bulavo-70b5e.appspot.com",
    messagingSenderId: "279244806731",
    appId: "1:279244806731:web:ac306b4315c21dea018bce",
    measurementId: "G-P07GYL9KTC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

const Blogpost = () => {
  const [imageTitle, setImageTitle] = useState('');
  const [image, setImage] = useState(null);
  const [blogTitle, setBlogTitle] = useState('');
  const [content, setContent] = useState('');

  const generateUniqueId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 5);
  };

  const submitForm = async (e) => {
    e.preventDefault();

    if (!imageTitle || !image || !blogTitle || !content) {
      alert("Please fill in all the required fields");
      return;
    }

    try {
      console.log("Uploading image...");
      const imageStorageRef = ref(storage, "images/" + image.name);
      await uploadBytes(imageStorageRef, image);
      console.log("Image uploaded successfully.");

      const imageDownloadURL = await getDownloadURL(imageStorageRef);
      console.log("Image URL:", imageDownloadURL);

      const blogId = generateUniqueId();
      const blogUrl = `https://bulavo.com/blogpage.html#${blogId}`;

      console.log("Generated Blog ID:", blogId);
      console.log("Generated Blog URL:", blogUrl);

      console.log("Storing blog data...");
      await setDoc(doc(db, "blog", blogId), {
        imageTitle: imageTitle,
        imageURL: imageDownloadURL,
        blogTitle: blogTitle,
        content: content,
        submissionTime: new Date(),
        isQuery: false,
        blogUrl: blogUrl
      });

      console.log("Blog URL:", blogUrl);
      alert(`Your blog has been submitted successfully. You can view it at ${blogUrl}`);

      // Reset form
      setImageTitle('');
      setImage(null);
      setBlogTitle('');
      setContent('');
    } catch (error) {
      console.error("An error occurred while submitting your blog:", error);
      alert("An error occurred while submitting your blog.");
    }
  };

  return (
    <form id="form" onSubmit={submitForm}>
      <h1>UPLOAD A BLOG</h1>

      <label htmlFor="imageTitle">Image Title:</label>
      <input 
        type="text" 
        id="imageTitle" 
        name="imageTitle" 
        placeholder="Enter image title" 
        required 
        value={imageTitle}
        onChange={(e) => setImageTitle(e.target.value)}
      /><br />

      <label htmlFor="image">Upload Image:</label>
      <input 
        type="file" 
        id="image" 
        name="image" 
        accept=".jpg, .jpeg, .png" 
        required 
        onChange={(e) => setImage(e.target.files[0])}
      /><br />

      <label htmlFor="blogTitle">Blog Title:</label>
      <input 
        type="text" 
        id="blogTitle" 
        name="blogTitle" 
        placeholder="Enter blog title" 
        required 
        value={blogTitle}
        onChange={(e) => setBlogTitle(e.target.value)}
      /><br />

      <label htmlFor="content">Content:</label>
      <textarea 
        id="content" 
        name="content" 
        required 
        placeholder="Enter blog content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea><br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Blogpost;