import React, { useState } from 'react';
import { BlockEditor } from 'block-editor-react';
import axios from 'axios';

/**
 * Basic usage example of BlockEditor component
 */
function BlogEditorPage() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const apiUrl = 'http://localhost:3000'; // Your API URL

    // Handle image upload
    const handleImageUpload = async (file) => {
        const formData = new FormData();
        formData.append('image', file);

        try {
            const response = await axios.post(`${apiUrl}/api/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            // Return the image URL to be stored in content
            return `${apiUrl}/uploads/${response.data.fileName}`;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };

    // Handle publish
    const handlePublish = async (articleTitle, articleContent) => {
        try {
            const response = await axios.post(`${apiUrl}/api/blog/publish`, {
                title: articleTitle,
                content: articleContent
            }, {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });

            console.log('Article published!', response.data);
            alert('Articolo pubblicato con successo!');

            // Reset form
            setTitle('');
            setContent([]);
        } catch (error) {
            console.error('Error publishing article:', error);
            alert('Errore durante la pubblicazione');
        }
    };

    // Format publication date
    const publicationDate = new Date().toLocaleDateString('it-IT', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    return (
        <BlockEditor
            title={title}
            content={content}
            publicationDate={`Oggi ${publicationDate}`}
            onTitleChange={setTitle}
            onContentChange={setContent}
            onPublish={handlePublish}
            onImageUpload={handleImageUpload}
            toolbarButtons={['h4', 'p', 'img']}
            allowedImageTypes=".png, .jpg, .jpeg, .gif, .webp"
            showBackButton={true}
            onBack={() => window.history.back()}
            publishButtonText="Pubblica"
            titlePlaceholder="Titolo del tuo articolo"
        />
    );
}

export default BlogEditorPage;
