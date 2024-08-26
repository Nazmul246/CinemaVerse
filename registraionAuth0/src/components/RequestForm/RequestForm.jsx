import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import Swal from 'sweetalert2'

const RequestForm = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const result = await response.json();
        if (result.success) {
            Swal.fire({
                title: "Done!",
                text: "Your Form Submitted Successfully!",
                icon: "success"
              });
        } else {
            setStatus("Failed to send request.");
        }

        e.target.reset();  // Optionally reset the form after submission
    };

    return (
        <div
            className='flex items-center justify-center min-h-screen bg-cover bg-center'
            style={{ backgroundImage: "url('/assets/images/request.jpg')" }}
        >
            <div className='p-6 rounded-lg shadow-lg'>
                <form 
                    onSubmit={handleSubmit} 
                    className='bg-white p-6 rounded-lg shadow-lg text-black'
                >
                    <h1 className='text-3xl text-center font-bold text-emerald-500 p-8'>Recommendation Form</h1>

                    {/* Include the access key as a hidden input field */}
                    <input type="hidden" name="access_key" value="dfd0ee8e-7836-4a78-8e4f-50d8a5ce417d" />
                    
                    <div className='mb-4'>
                        <h1 className='text-lg mb-2'>Email Address</h1>
                        <input 
                            type="email" 
                            name='email' 
                            placeholder='Email...' 
                            className='w-full p-2 border border-gray-300 rounded-md outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <h1 className='text-lg mb-2'>Select Category</h1>
                        <div className='flex items-center mb-2'>
                            <input 
                                type="radio" 
                                name="category" 
                                id="movie" 
                                value="Movie"
                                className='mr-2'
                                required
                            />
                            <label htmlFor="movie" className='mr-4'>Movie</label>
                            <input 
                                type="radio" 
                                name="category" 
                                id="series" 
                                value="Series"
                                className='mr-2'
                                required
                            />
                            <label htmlFor="series">Series</label>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h1 className='text-lg mb-2'>Title</h1>
                        <input 
                            type="text" 
                            name='title' 
                            placeholder='Name...' 
                            className='w-full p-2 border border-gray-300 rounded-md outline-none'
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <h1 className='text-lg mb-2'>If you have any feedback, let me know!</h1>
                        <textarea  
                            name='message' 
                            rows='5'
                            cols='5'
                            placeholder='Feedback...' 
                            className='w-full p-2 border border-gray-300 rounded-md outline-none resize-none'
                        />
                    </div>
                    <div className='text-center'>
                        <button type="submit" className='border-2 rounded-lg border-gray-300 bg-amber-400 p-2 hover:shadow-zinc-400'>
                            Submit Form
                        </button>
                    </div>
                    {status && <p className="text-center mt-4">{status}</p>}
                </form>
            </div>
        </div>
    );
};

export default RequestForm;
