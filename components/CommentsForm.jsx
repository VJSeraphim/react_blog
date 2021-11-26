import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {

    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccess, setShowSuccess] = useState(false)
    const commentElements = useRef()
    const nameElements = useRef()
    const emailElements = useRef()
    const storeDataElements = useRef()

    useEffect(() => {
        nameElements.current.value = window.localStorage.getItem('name')
        emailElements.current.value = window.localStorage.getItem('email')
    }, [])

    const handleCommentSubmit = () => {
        setError(false)

        const { value: commentValues } = commentElements.current
        const { value: nameValues } = nameElements.current
        const { value: emailValues } = emailElements.current
        const { value: storeData } = storeDataElements.current
        
        if ( !commentValues || !nameValues || !emailValues) {
            setError(true)
            return
        }

        const commentObj = {
            nameValues, emailValues, commentValues, slug
        }

        if ( storeData ) {
            window.localStorage.setItem('name', nameValues)
            window.localStorage.setItem('email', emailValues)
        } else {
            window.localStorage.removeItem('name', nameValues)
            window.localStorage.removeItem('email', emailValues)
        }

        submitComment(commentObj).then((res) => {
            setShowSuccess(true)
            setTimeout(() => {
                setShowSuccess(false)
            }, 3000)
        })
    }

    return (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
            <h3 className="text-xl mb-8 font-semibold border-b pb-4">

            </h3>
            <div className="grid grid-cols-1 gap-4 mb-4">
                <textarea ref={commentElements} className="
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
            <div className="grid grid-cols-1 gap-4 mb-4">
                <div>
                    <input 
                        ref={storeDataElements}
                        type="checkbox"
                        id="storeData"
                        name="storeData"
                        value="true"
                    />
                    <label className="text-gray-500 cursor-pointer ml-2">
                        Save my Name and Email for my next comments
                    </label>
                </div>
            </div>
            {error && <p className="text-xs text-red-500">
                You should fill out All fields!
            </p>}
            <div className="mt-8">
                <button 
                    type="button" 
                    onClick={handleCommentSubmit}
                    className="
                        transition
                        duration-300
                        ease
                        hover:bg-indigo-900
                        inline-block
                        bg-pink-400
                        text-lg
                        rounded-full
                        text-white
                        px-8 py-3
                        cursor-pointer
                    "
                >
                Post Comment
                {showSuccess && 
                    <span className="text-xl float-right font-semibold mt-3 text-green-500">
                        Comments
                    </span>
                }

                </button>
            </div>
        </div>
    )
}

export default CommentsForm
