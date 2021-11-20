import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = ({ slug }) => {

    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const commentElements = useRef()
    const nameElements = useRef()
    const emailElements = useRef()
    const storeDataElements = useRef()

    const handleCommentSubmit = () => {
        
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">

            </h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textArea ref={commentElements} className="
                    p-4 outline-none w-full rounded-lg focus:ring-2
                    focus:ring-gray-200 bg-gray-100 text-gray-700
                "
                placeholder="Comment"
                name="comment"
                />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <input 
                    type="text"
                    ref={nameElements}
                    className="
                        py-2 px-4 outline-none w-full rounded-lg focus:ring-2
                        focus:ring-gray-200 bg-gray-100 text-gray-700
                    "
                    placeholder="Name"
                    name="name"
                />
                <input 
                    type="text"
                    ref={emailElements}
                    className="
                        py-2 px-4 outline-none w-full rounded-lg focus:ring-2
                        focus:ring-gray-200 bg-gray-100 text-gray-700
                    "
                    placeholder="Email"
                    name="email"
                />
            </div>
            {error && <p className="text-xs text-red-500">
                You should fill out All fields!
            </p>}
            <div className="mt-8">
                <button type="button" onClick={handleCommentSubmit}>

                </button>
            </div>
        </div>
    )
}

export default CommentsForm
