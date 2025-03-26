import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
    const [successMessage, setSuccessMessage] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/posts', { title, content, author });
            setSuccessMessage('Post created successfully!');
            // Optionally redirect or clear the form
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit} onReset={() => setSuccessMessage('')}>
                <div>
                    <label>Author:</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                    <label>Title:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Content:</label>
                    <textarea value={content} onChange={(e) => setContent(e.target.value)} required />
                </div>
                <button type="submit">Create Post</button>
                {successMessage && <p>{successMessage}</p>}
            </form>
        </div>
    );
};

export default CreatePost;
