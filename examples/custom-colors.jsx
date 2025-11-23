import React, { useState } from 'react';
import { BlockEditor, defaultColors } from 'block-editor-react';

/**
 * Example: Custom color theme for BlockEditor
 */
function CustomColorExample() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);

    // Define your custom color theme
    const customColors = {
        // Override specific colors while keeping defaults for others
        publishButtonBackground: '#667eea',
        publishButtonHover: '#764ba2',
        toolbarIconColor: '#667eea',
        toolbarIconHover: '#764ba2',
        headingColor: '#667eea',
        inputFocusBorder: '#667eea'
    };

    // Or create a complete dark theme
    const darkTheme = {
        containerBackground: '#1e1e2e',
        toolbarBackground: '#2a2a3e',
        toolbarBorder: 'rgba(255, 255, 255, .1)',
        toolbarShadow: '0px 5px 9px -6px rgba(0, 0, 0, .5)',
        toolbarIconColor: 'rgba(255, 255, 255, .6)',
        toolbarIconHover: 'rgba(255, 255, 255, .9)',
        publishButtonBackground: '#667eea',
        publishButtonColor: '#fff',
        publishButtonHover: '#764ba2',
        backButtonColor: 'rgba(255, 255, 255, .6)',
        backButtonHover: 'rgba(255, 255, 255, .9)',
        textColor: '#fff',
        headingColor: '#fff',
        inputBorder: 'rgba(255, 255, 255, .2)',
        inputFocusBorder: '#667eea',
        dateColor: 'rgba(255, 255, 255, .5)',
        dividerColor: 'rgba(255, 255, 255, .3)',
        imageDeleteBackground: '#2a2a3e',
        imageDeleteColor: '#ff6b6b',
        imageDeleteHoverColor: '#ff5252',
        imageDeleteShadow: '0px 0px 19px -7px #000000',
        imageDeleteHoverShadow: '0px 0px 25px -5px #000000'
    };

    const handlePublish = (articleTitle, articleContent) => {
        console.log('Publishing:', { articleTitle, articleContent });
    };

    const handleImageUpload = async (file) => {
        // Your image upload logic
        return 'https://example.com/image.jpg';
    };

    return (
        <div>
            <h1>Custom Colors Example</h1>

            <h2>Using custom accent colors:</h2>
            <BlockEditor
                title={title}
                content={content}
                publicationDate="Today"
                onTitleChange={setTitle}
                onContentChange={setContent}
                onPublish={handlePublish}
                onImageUpload={handleImageUpload}
                colors={customColors} // Pass your custom colors here
            />

            <h2>Using dark theme:</h2>
            <BlockEditor
                title={title}
                content={content}
                publicationDate="Today"
                onTitleChange={setTitle}
                onContentChange={setContent}
                onPublish={handlePublish}
                onImageUpload={handleImageUpload}
                colors={darkTheme} // Pass dark theme
            />

            <h2>Available color options:</h2>
            <pre>{JSON.stringify(defaultColors, null, 2)}</pre>
        </div>
    );
}

export default CustomColorExample;
