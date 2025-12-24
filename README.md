# Block Editor React

A simple, elegant block-based rich text editor for React. Create structured content with titles, paragraphs, and images - perfect for blogs, articles, and content management systems.

## Features

- **Block-Based Editing**: Add and organize content blocks (headings, paragraphs, images)
- **Clean Interface**: Minimalist toolbar with intuitive controls
- **Image Support**: Upload and manage images with drag-to-delete
- **Keyboard Shortcuts**: Delete empty blocks with backspace
- **Fully Customizable**: Control toolbar buttons, styling, and behavior via props
- **Responsive**: Works great on desktop and mobile devices
- **Lightweight**: No heavy dependencies, built with vanilla React
- **Type-Safe**: PropTypes validation included

## Installation

Since this package is not published on npm registry, you need to install it directly from GitHub:

### Option 1: Using Tarball URL (Recommended for Windows)

```bash
npm install https://github.com/pietroleto/block-editor-react/tarball/v1.0.2
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@pietroleto/block-editor-react": "https://github.com/pietroleto/block-editor-react/tarball/v1.0.2"
  }
}
```

### Option 2: Using Git Protocol (Linux/Mac)

```bash
npm install git+https://github.com/pietroleto/block-editor-react.git#v1.0.2
```

Or add to your `package.json`:

```json
{
  "dependencies": {
    "@pietroleto/block-editor-react": "git+https://github.com/pietroleto/block-editor-react.git#v1.0.2"
  }
}
```

**Note:** On Windows, the Git protocol method may fail with ENOENT errors due to SSH conversion issues. Use the tarball URL method instead.

## Quick Start

```jsx
import React, { useState } from 'react';
import { BlockEditor } from 'block-editor-react';

function MyEditor() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);

    const handlePublish = (articleTitle, articleContent) => {
        console.log('Title:', articleTitle);
        console.log('Content:', articleContent);
        // Save to your backend
    };

    const handleImageUpload = async (file) => {
        // Upload image to your server
        const formData = new FormData();
        formData.append('image', file);
        const response = await fetch('/api/upload', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        return data.imageUrl; // Return the URL
    };

    return (
        <BlockEditor
            title={title}
            content={content}
            publicationDate="Today"
            onTitleChange={setTitle}
            onContentChange={setContent}
            onPublish={handlePublish}
            onImageUpload={handleImageUpload}
        />
    );
}
```

## Props API

### BlockEditor

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | `''` | Article title |
| `content` | array | `[]` | Array of content blocks `[{id, type, value}]` |
| `publicationDate` | string | `''` | Publication date string to display |
| `onTitleChange` | function | - | Callback when title changes `(newTitle) => {}` |
| `onContentChange` | function | - | Callback when content changes `(newContent) => {}` |
| `onPublish` | function | - | Callback when publish is clicked `(title, content) => {}` |
| `onImageUpload` | function | - | Callback for image upload `(file) => Promise<imageUrl>` |
| `toolbarButtons` | array | `['h4', 'p', 'img']` | Enabled toolbar buttons |
| `allowedImageTypes` | string | `'.png, .jpg, .jpeg'` | Accepted image file types |
| `showBackButton` | boolean | `true` | Show back button in toolbar |
| `onBack` | function | - | Callback when back button is clicked |
| `publishButtonText` | string | `'Pubblica'` | Text for publish button |
| `titlePlaceholder` | string | `'Titolo articolo'` | Placeholder for title field |

### Content Block Structure

Each content block is an object with:

```javascript
{
    id: string,        // Unique identifier (generated automatically)
    type: string,      // 'h4', 'p', or 'img'
    value: string      // Text content or image URL
}
```

Example:
```javascript
[
    { id: '_abc123', type: 'h4', value: 'Introduction' },
    { id: '_def456', type: 'p', value: 'This is a paragraph...' },
    { id: '_ghi789', type: 'img', value: 'https://example.com/image.jpg' }
]
```

## Advanced Usage

### Custom Styling

You can override the default styles by targeting the CSS classes:

```css
/* Change toolbar background */
.editor-nav {
    background-color: #f5f5f5 !important;
}

/* Customize publish button */
.publish-button {
    background-color: #007bff;
    border-radius: 8px;
}

/* Style content blocks */
.editor-content h4 {
    color: #333;
    font-size: 28px;
}
```

### Backend Integration

#### Image Upload Example

```javascript
const handleImageUpload = async (file) => {
    const formData = new FormData();
    formData.append('image', file);

    try {
        const response = await axios.post('https://api.example.com/upload', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
            }
        });

        return response.data.imageUrl;
    } catch (error) {
        console.error('Upload failed:', error);
        throw error;
    }
};
```

#### Save Article Example

```javascript
const handlePublish = async (title, content) => {
    try {
        await axios.post('https://api.example.com/articles', {
            title,
            content,
            published_at: new Date()
        }, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        alert('Article published successfully!');
    } catch (error) {
        console.error('Publish failed:', error);
        alert('Failed to publish article');
    }
};
```

### Edit Existing Article

```jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BlockEditor } from 'block-editor-react';

function EditArticle() {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch existing article
        fetch(`/api/articles/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setContent(data.content);
                setLoading(false);
            });
    }, [id]);

    const handleUpdate = async (title, content) => {
        await fetch(`/api/articles/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content })
        });
        alert('Article updated!');
    };

    if (loading) return <div>Loading...</div>;

    return (
        <BlockEditor
            title={title}
            content={content}
            onTitleChange={setTitle}
            onContentChange={setContent}
            onPublish={handleUpdate}
            publishButtonText="Update"
        />
    );
}
```

### Custom Toolbar

Enable only specific toolbar buttons:

```jsx
<BlockEditor
    toolbarButtons={['p', 'img']} // Only paragraphs and images
    // ... other props
/>
```

### Without Back Button

```jsx
<BlockEditor
    showBackButton={false}
    // ... other props
/>
```

## Rendering Published Content

To display published articles on your website, map over the content blocks:

```jsx
function ArticleView({ article }) {
    return (
        <div className="article">
            <h1>{article.title}</h1>
            <p className="date">{article.publicationDate}</p>

            <div className="content">
                {article.content.map((block, index) => {
                    switch (block.type) {
                        case 'h4':
                            return <h4 key={index}>{block.value}</h4>;
                        case 'p':
                            return <p key={index}>{block.value}</p>;
                        case 'img':
                            return <img key={index} src={block.value} alt="" />;
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Dependencies

- React ^16.8.0 || ^17.0.0 || ^18.0.0 (peer dependency)
- prop-types ^15.8.1

## Development

```bash
# Clone the repository
git clone https://github.com/yourusername/block-editor-react.git

# Install dependencies
cd block-editor-react
npm install

# Build the package
npm run build

# Link for local development
npm link
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT © 2025

## Support

If you encounter any issues or have questions, please [open an issue](https://github.com/yourusername/block-editor-react/issues) on GitHub.

## Changelog

### 1.0.0 (2025-01-XX)

- Initial release
- Block-based editor with h4, p, and img support
- Image upload functionality
- Responsive design
- Keyboard shortcuts
- Full PropTypes validation
