import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Editable.css';

/**
 * Editable Component
 * A contentEditable wrapper that provides a clean interface for inline editing
 *
 * @param {string} tag - HTML tag to render (h1, h2, h3, h4, h5, h6, p, div, span)
 * @param {function} onChange - Callback when content changes, receives new text
 * @param {string} placeholder - Placeholder text when empty
 * @param {string} value - Controlled value
 * @param {function} onKeyDown - Callback for keydown events
 * @param {object} style - Custom inline styles
 * @param {string} className - Additional CSS classes
 */
const Editable = ({
    tag: Tag = 'div',
    onChange,
    placeholder,
    value,
    onKeyDown,
    style = {},
    className = ''
}) => {
    const editableRef = useRef(null);
    const [isEmpty, setIsEmpty] = useState(true);

    // Update content when value prop changes
    useEffect(() => {
        if (editableRef.current && editableRef.current.textContent !== value) {
            editableRef.current.textContent = value;
            setIsEmpty(value === '');
        }
    }, [value]);

    const handleInput = () => {
        const newText = editableRef.current.textContent;
        setIsEmpty(newText === '');
        if (onChange) {
            onChange(newText);
        }
    };

    return (
        <Tag
            ref={editableRef}
            contentEditable
            suppressContentEditableWarning
            onInput={handleInput}
            onKeyDown={onKeyDown}
            data-placeholder={placeholder}
            className={`editable-component ${isEmpty ? 'empty' : ''} ${className}`}
            style={style}
        />
    );
};

Editable.propTypes = {
    tag: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onKeyDown: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
};

Editable.defaultProps = {
    tag: 'div',
    placeholder: '',
    value: '',
    style: {},
    className: ''
};

export default Editable;
