import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import Editable from '../Editable/Editable';
import { defaultColors, generateCSSVariables } from '../../theme/colors';
import './BlockEditor.css';

/**
 * BlockEditor Component
 * A block-based rich text editor for creating structured content
 *
 * @param {string} title - Article title
 * @param {array} content - Array of content blocks [{id, type, value}]
 * @param {string} publicationDate - Publication date string
 * @param {function} onTitleChange - Callback when title changes
 * @param {function} onContentChange - Callback when content changes
 * @param {function} onPublish - Callback when publish button is clicked
 * @param {function} onImageUpload - Callback for image upload, receives File object
 * @param {function} onImageDelete - Callback for image deletion, receives image URL
 * @param {array} toolbarButtons - Array of enabled toolbar buttons ['h4', 'p', 'img']
 * @param {object} allowedImageTypes - Accepted image file types
 * @param {boolean} showBackButton - Show back button in toolbar
 * @param {function} onBack - Callback when back button is clicked
 * @param {string} publishButtonText - Text for publish button
 * @param {string} titlePlaceholder - Placeholder for title field
 * @param {object} colors - Custom color theme object
 */
const BlockEditor = ({
    title = '',
    content = [],
    publicationDate = '',
    onTitleChange,
    onContentChange,
    onPublish,
    onImageUpload,
    onImageDelete,
    toolbarButtons = ['h4', 'p', 'img'],
    allowedImageTypes = '.png, .jpg, .jpeg',
    showBackButton = true,
    onBack,
    publishButtonText = 'Pubblica',
    titlePlaceholder = 'Titolo articolo',
    colors = {}
}) => {
    const [blogContent, setBlogContent] = useState(content);
    const [blogTitle, setBlogTitle] = useState(title);
    const fileInputRef = React.useRef(null);

    // Merge custom colors with defaults
    const theme = { ...defaultColors, ...colors };

    // Sync with external props
    useEffect(() => {
        setBlogContent(content);
    }, [content]);

    useEffect(() => {
        setBlogTitle(title);
    }, [title]);

    const generateId = () => {
        const randomString = Math.random().toString(36).substr(2, 9);
        return '_' + randomString;
    };

    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        if (onImageUpload) {
            try {
                const imageUrl = await onImageUpload(file);
                const newContent = [
                    ...blogContent,
                    { id: generateId(), type: 'img', value: imageUrl }
                ];
                setBlogContent(newContent);
                if (onContentChange) {
                    onContentChange(newContent);
                }
            } catch (error) {
                console.error("Errore nel caricamento dell'immagine:", error);
            }
        }

        // Reset input
        event.target.value = '';
    };

    const addElement = useCallback((type) => {
        const newContent = [
            ...blogContent,
            { id: generateId(), type, value: '' }
        ];
        setBlogContent(newContent);
        if (onContentChange) {
            onContentChange(newContent);
        }
    }, [blogContent, onContentChange]);

    const handleContentBlockChange = useCallback((id, newText) => {
        const newContent = blogContent.map((item) =>
            item.id === id ? { ...item, value: newText } : item
        );
        setBlogContent(newContent);
        if (onContentChange) {
            onContentChange(newContent);
        }
    }, [blogContent, onContentChange]);

    const handleKeyDown = useCallback((event, id, type, value) => {
        if (event.key === 'Backspace' && (type === 'p' || type === 'h4') && value === '') {
            event.preventDefault();
            const newContent = blogContent.filter((item) => item.id !== id);
            setBlogContent(newContent);
            if (onContentChange) {
                onContentChange(newContent);
            }
        }
    }, [blogContent, onContentChange]);

    const deleteImage = useCallback((id, imageUrl) => {
        // Chiama la callback per eliminare l'immagine dal server (se fornita)
        if (onImageDelete && imageUrl) {
            onImageDelete(imageUrl);
        }

        // Rimuovi l'immagine dal contenuto
        const newContent = blogContent.filter((item) => item.id !== id);
        setBlogContent(newContent);
        if (onContentChange) {
            onContentChange(newContent);
        }
    }, [blogContent, onContentChange, onImageDelete]);

    const handleTitleChange = (newTitle) => {
        setBlogTitle(newTitle);
        if (onTitleChange) {
            onTitleChange(newTitle);
        }
    };

    const handlePublish = (e) => {
        e.preventDefault();
        if (onPublish) {
            onPublish(blogTitle, blogContent);
        }
    };

    // Generate inline styles for CSS variables
    const containerStyle = {
        '--block-editor-container-background': theme.containerBackground,
        '--block-editor-toolbar-background': theme.toolbarBackground,
        '--block-editor-toolbar-border': theme.toolbarBorder,
        '--block-editor-toolbar-shadow': theme.toolbarShadow,
        '--block-editor-toolbar-icon-color': theme.toolbarIconColor,
        '--block-editor-toolbar-icon-hover': theme.toolbarIconHover,
        '--block-editor-publish-button-background': theme.publishButtonBackground,
        '--block-editor-publish-button-color': theme.publishButtonColor,
        '--block-editor-publish-button-hover': theme.publishButtonHover,
        '--block-editor-back-button-color': theme.backButtonColor,
        '--block-editor-back-button-hover': theme.backButtonHover,
        '--block-editor-text-color': theme.textColor,
        '--block-editor-heading-color': theme.headingColor,
        '--block-editor-input-border': theme.inputBorder,
        '--block-editor-input-focus-border': theme.inputFocusBorder,
        '--block-editor-date-color': theme.dateColor,
        '--block-editor-divider-color': theme.dividerColor,
        '--block-editor-image-delete-background': theme.imageDeleteBackground,
        '--block-editor-image-delete-color': theme.imageDeleteColor,
        '--block-editor-image-delete-hover-color': theme.imageDeleteHoverColor,
        '--block-editor-image-delete-shadow': theme.imageDeleteShadow,
        '--block-editor-image-delete-hover-shadow': theme.imageDeleteHoverShadow
    };

    return (
        <div className="blog-editor-container" style={containerStyle}>
            <form onSubmit={handlePublish}>
                <div className="editor-nav">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            {showBackButton && (
                                <div className="col-sm-0 col-lg-1">
                                    <button
                                        type="button"
                                        className="back-button"
                                        onClick={onBack}
                                        aria-label="Indietro"
                                    >
                                        ←
                                    </button>
                                </div>
                            )}
                            <div className={`${showBackButton ? 'col-sm-9 col-lg-10' : 'col-sm-9 col-lg-11'} d-flex justify-content-center align-items-center toolbar`}>
                                {toolbarButtons.includes('h4') && (
                                    <svg
                                        className="toolbar-icon"
                                        onClick={() => addElement('h4')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="14"
                                        viewBox="0 0 448 512"
                                        title="Aggiungi titolo"
                                    >
                                        <path d="M0 64C0 46.3 14.3 32 32 32H80h48c17.7 0 32 14.3 32 32s-14.3 32-32 32H112V208H336V96H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h48 48c17.7 0 32 14.3 32 32s-14.3 32-32 32H400V240 416h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H368 320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V272H112V416h16c17.7 0 32-14.3 32 32s-14.3 32-32 32H80 32c-17.7 0-32-14.3-32-32s14.3-32 32-32H48V240 96H32C14.3 96 0 81.7 0 64z" />
                                    </svg>
                                )}

                                {toolbarButtons.includes('p') && (
                                    <svg
                                        className="toolbar-icon"
                                        onClick={() => addElement('p')}
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="16"
                                        width="14"
                                        viewBox="0 0 448 512"
                                        title="Aggiungi paragrafo"
                                    >
                                        <path d="M192 32h64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H384l0 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-352H288V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H192c-88.4 0-160-71.6-160-160s71.6-160 160-160z" />
                                    </svg>
                                )}

                                {toolbarButtons.includes('img') && (
                                    <>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            className="hidden"
                                            name="immagini[]"
                                            accept={allowedImageTypes}
                                            onChange={handleImageUpload}
                                        />
                                        <svg
                                            className="toolbar-icon"
                                            onClick={() => fileInputRef.current?.click()}
                                            xmlns="http://www.w3.org/2000/svg"
                                            height="16"
                                            width="16"
                                            viewBox="0 0 512 512"
                                            title="Aggiungi immagine"
                                        >
                                            <path d="M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                                        </svg>
                                    </>
                                )}
                            </div>
                            <div className="col-0 col-sm-3 col-md-3 col-lg-1 d-flex justify-content-center align-items-center">
                                <button
                                    type="submit"
                                    className="publish-button"
                                >
                                    {publishButtonText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container editor-header">
                    <Editable
                        tag="h3"
                        placeholder={titlePlaceholder}
                        value={blogTitle}
                        onChange={handleTitleChange}
                        className="article-title"
                    />
                    <span className="publication-date">
                        {publicationDate}
                    </span>
                    <hr />

                    <div className="container editor-content">
                        {blogContent.length > 0 &&
                            blogContent.map((element) => (
                                <div key={element.id} className="content-block">
                                    {element.type === 'img' ? (
                                        <div className="image-block">
                                            <svg
                                                className="delete-image"
                                                xmlns="http://www.w3.org/2000/svg"
                                                height="16"
                                                width="12"
                                                viewBox="0 0 384 512"
                                                onClick={() => deleteImage(element.id, element.value)}
                                                title="Elimina immagine"
                                            >
                                                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                                            </svg>
                                            <img
                                                src={element.value}
                                                alt="Content"
                                                className="content-image"
                                            />
                                        </div>
                                    ) : (
                                        <Editable
                                            tag={element.type}
                                            value={element.value}
                                            placeholder="Scrivi qualcosa..."
                                            onChange={(newText) =>
                                                handleContentBlockChange(element.id, newText)
                                            }
                                            onKeyDown={(event) =>
                                                handleKeyDown(event, element.id, element.type, element.value)
                                            }
                                        />
                                    )}
                                </div>
                            ))}
                    </div>
                </div>
            </form>
        </div>
    );
};

BlockEditor.propTypes = {
    title: PropTypes.string,
    content: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            type: PropTypes.oneOf(['h4', 'p', 'img']),
            value: PropTypes.string
        })
    ),
    publicationDate: PropTypes.string,
    onTitleChange: PropTypes.func,
    onContentChange: PropTypes.func,
    onPublish: PropTypes.func,
    onImageUpload: PropTypes.func,
    onImageDelete: PropTypes.func,
    toolbarButtons: PropTypes.arrayOf(PropTypes.oneOf(['h4', 'p', 'img'])),
    allowedImageTypes: PropTypes.string,
    showBackButton: PropTypes.bool,
    onBack: PropTypes.func,
    publishButtonText: PropTypes.string,
    titlePlaceholder: PropTypes.string,
    colors: PropTypes.object
};

export default BlockEditor;
