import React from 'react'

const Testpost = () => {
  return (
    <>
    <h1>Create New Post</h1>
    <form id="post-form">
      <label for="title">Title:</label>
      <input type="text" id="title" name="title" required />
      <br />
      <label for="author">Author:</label>
      <input type="text" id="author" name="author" required />
      <br />
      <label for="content">Content:</label>
      <textarea id="content" name="content" required></textarea>
      <br />
      <button type="submit">Publish Post</button>
    </form>
  </>
  )
}

export default Testpost
