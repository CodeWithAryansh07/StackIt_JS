import React, { useState, useRef } from 'react'
import axios from 'axios'

const AskAQuestionQuill = () => {
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState([])
    const [currentTag, setCurrentTag] = useState('')
    const [description, setDescription] = useState('')
    const [isPreview, setIsPreview] = useState(false)
    const editorRef = useRef(null)
    const fileInputRef = useRef(null)

    // Rich text editor commands
    const execCommand = (command, value = null) => {
        document.execCommand(command, false, value)
        editorRef.current?.focus()
    }

    // Handle text alignment
    const handleAlignment = (alignment) => {
        execCommand('justify' + alignment)
    }

    // Handle emoji insertion
    const insertEmoji = (emoji) => {
        execCommand('insertText', emoji)
    }

    // Handle hyperlink insertion
    const insertLink = () => {
        const url = prompt('Enter URL:')
        if (url) {
            execCommand('createLink', url)
        }
    }

    // Handle image upload
    const handleImageUpload = (event) => {
        const file = event.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                execCommand('insertImage', e.target.result)
            }
            reader.readAsDataURL(file)
        }
    }

    // Common emojis
    const commonEmojis = ['😀', '😂', '🤔', '👍', '👎', '❤️', '🔥', '💡', '⚡', '🎉']

    // Handle content change
    const handleContentChange = () => {
        if (editorRef.current) {
            setDescription(editorRef.current.innerHTML)
        }
    }

    // Handle tag addition
    const addTag = (e) => {
        if (e.key === 'Enter' && currentTag.trim()) {
            e.preventDefault()
            if (!tags.includes(currentTag.trim())) {
                setTags([...tags, currentTag.trim()])
            }
            setCurrentTag('')
        }
    }

    // Remove tag
    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove))
    }

    // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault()
        
    //     // Prepare data for backend
    //     const questionData = {
    //         title: title,
    //         description: description, // HTML content
    //         plainText: editorRef.current?.innerText || '', // Plain text
    //         tags: tags,
    //         timestamp: new Date().toISOString(),
    //         wordCount: editorRef.current?.innerText.split(' ').filter(word => word.length > 0).length || 0
    //     }

    //     // Console log the data (temporary)
    //     console.log('=== IMPROVED QUESTION DATA FOR BACKEND ===')
    //     console.log('Title:', questionData.title)
    //     console.log('Tags:', questionData.tags)
    //     console.log('HTML Content:', questionData.description)
    //     console.log('Plain Text:', questionData.plainText)
    //     console.log('Word Count:', questionData.wordCount)
    //     console.log('Full Data Object:', questionData)
    //     console.log('==========================================')

    //     alert('Question data logged to console! Check developer tools.')
    // }

    const handleSubmit = async (e) => {
        try {
            const response = await axios.get(import.meta.env.VITE_BACKEND_URI + "/api/questions", {
                title: title,
                description: editorRef.current?.innerText || '', // Plain text
                tags: tags,
                authorId: localStorage.getItem('userId')
            });

            console.log(response);

            e.preventDefault();
        } catch (error) {
            console.error("Error fetching questions:", error);
        }
        console.log("Heklfwe]-tof")
    }

    return (
        <div className="min-h-screen bg-slate-900 py-8">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                        Ask a Question
                    </h1>
                    <p className="text-slate-400">
                        Be specific and imagine you're asking a question to another person
                    </p>
                </div>

                <form className="space-y-6">
                    {/* Title Input */}
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
                        <label className="block text-slate-300 font-medium mb-3">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="What's your programming question? Be specific."
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                        <p className="text-slate-500 text-sm mt-2">
                            Include keywords that will help people find your question
                        </p>
                    </div>

                    {/* Quill Rich Text Editor */}
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                            <label className="text-slate-300 font-medium">
                                Description
                            </label>
                            <div className="flex gap-2">
                                <button
                                    type="button"
                                    onClick={() => setIsPreview(!isPreview)}
                                    className="px-3 py-1.5 text-sm bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-md transition-colors"
                                >
                                    {isPreview ? 'Edit' : 'Preview'}
                                </button>
                            </div>
                        </div>

                        {!isPreview ? (
                            <>
                                {/* Toolbar */}
                                <div className="flex flex-wrap items-center gap-2 p-3 bg-slate-700/30 border border-slate-600/50 rounded-t-lg border-b-0">
                                    {/* Text Formatting */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => execCommand('bold')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Bold"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M12.6 7.8c.4-.4.6-1 .6-1.6 0-.6-.2-1.2-.6-1.6C12.2 4.2 11.6 4 11 4H6v12h5.5c.8 0 1.5-.3 2.1-.9.6-.6.9-1.3.9-2.1 0-.8-.3-1.5-.9-2.1zM8 6h3c.3 0 .5.1.7.3.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3H8V6zm4.5 8H8v-2h4.5c.3 0 .5.1.7.3.2.2.3.4.3.7s-.1.5-.3.7c-.2.2-.4.3-.7.3z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => execCommand('italic')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Italic"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 4h6v2h-2l-2 8h2v2H6v-2h2l2-8H8V4z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => execCommand('strikeThrough')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Strikethrough"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 9h14v2H3V9zm3-3h8v2H6V6zm2 8h4v2H8v-2z"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="w-px h-6 bg-slate-600"></div>

                                    {/* Lists */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => execCommand('insertOrderedList')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Numbered List"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4h1v1H3V4zm0 3h1v1H3V7zm0 3h1v1H3v-1zm3-6h11v2H6V4zm0 3h11v2H6V7zm0 3h11v2H6v-2z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => execCommand('insertUnorderedList')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Bullet List"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M4 6a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4zm0 4a2 2 0 100-4 2 2 0 000 4zm4-8h8v2H8V6zm0 4h8v2H8v-2zm0 4h8v2H8v-2z"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="w-px h-6 bg-slate-600"></div>

                                    {/* Alignment */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={() => handleAlignment('Left')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Align Left"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4h14v2H3V4zm0 4h10v2H3V8zm0 4h14v2H3v-2zm0 4h10v2H3v-2z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleAlignment('Center')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Align Center"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4h14v2H3V4zm2 4h10v2H5V8zm-2 4h14v2H3v-2zm2 4h10v2H5v-2z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleAlignment('Right')}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Align Right"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M3 4h14v2H3V4zm4 4h10v2H7V8zm-4 4h14v2H3v-2zm4 4h10v2H7v-2z"/>
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="w-px h-6 bg-slate-600"></div>

                                    {/* Link and Image */}
                                    <div className="flex items-center gap-1">
                                        <button
                                            type="button"
                                            onClick={insertLink}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Insert Link"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"/>
                                            </svg>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => fileInputRef.current?.click()}
                                            className="p-2 hover:bg-slate-600/50 text-slate-300 hover:text-white rounded transition-colors"
                                            title="Insert Image"
                                        >
                                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd"/>
                                            </svg>
                                        </button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="hidden"
                                        />
                                    </div>

                                    <div className="w-px h-6 bg-slate-600"></div>

                                    {/* Emojis */}
                                    <div className="flex items-center gap-1">
                                        {commonEmojis.map((emoji, index) => (
                                            <button
                                                key={index}
                                                type="button"
                                                onClick={() => insertEmoji(emoji)}
                                                className="p-1 hover:bg-slate-600/50 rounded transition-colors text-lg"
                                                title={`Insert ${emoji}`}
                                            >
                                                {emoji}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Editor */}
                                <div
                                    ref={editorRef}
                                    contentEditable
                                    onInput={handleContentChange}
                                    className="min-h-[300px] p-4 bg-slate-700/30 border border-slate-600/50 rounded-b-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                                    style={{ whiteSpace: 'pre-wrap' }}
                                    placeholder="Describe your problem in detail..."
                                />
                            </>
                        ) : (
                            /* Preview */
                            <div className="min-h-[300px] p-4 bg-slate-700/30 border border-slate-600/50 rounded-lg">
                                <div 
                                    className="text-white prose prose-invert max-w-none"
                                    dangerouslySetInnerHTML={{ __html: description || '<p class="text-slate-400">Preview will appear here...</p>' }}
                                />
                            </div>
                        )}
                    </div>

                    {/* Tags */}
                    <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/50 rounded-lg p-6">
                        <label className="block text-slate-300 font-medium mb-3">
                            Tags
                        </label>
                        <div className="flex flex-wrap gap-2 mb-3">
                            {tags.map((tag, index) => (
                                <span
                                    key={index}
                                    className="inline-flex items-center gap-1 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm"
                                >
                                    {tag}
                                    <button
                                        type="button"
                                        onClick={() => removeTag(tag)}
                                        className="hover:text-blue-300"
                                    >
                                        ×
                                    </button>
                                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={currentTag}
                            onChange={(e) => setCurrentTag(e.target.value)}
                            onKeyDown={addTag}
                            placeholder="Add tags (press Enter to add)"
                            className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all"
                        />
                        <p className="text-slate-500 text-sm mt-2">
                            Add up to 5 tags to describe what your question is about
                        </p>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                        >
                            Post Your Question
                        </button>
                        {/* <button
                            type="button"
                            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-300 hover:text-white font-medium rounded-lg transition-colors"
                        >
                            Save Draft
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AskAQuestionQuill
