import React, { useState } from 'react';

export default function AddResourceForm({ onAddResource }) {
    // Controlled inputs state
    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('Frontend');
    const [rating, setRating] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop page refresh

        // Create the new resource object
        const newResource = {
            id: Date.now(), // Generate a unique key
            title: title,
            category: category,
            rating: Number(rating)
        };

        // Pass data back to parent component
        onAddResource(newResource);

        // Clear the form inputs
        setTitle('');
        setCategory('Frontend');
        setRating(0);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginTop: '20px', padding: '16px', backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
            <h4>Add a New Resource</h4>

            <div style={{ marginBottom: '10px' }}>
                <label>Title: </label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Category: </label>
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                    <option value="Design">Design</option>
                </select>
            </div>

            <div style={{ marginBottom: '10px' }}>
                <label>Rating (0-5): </label>
                <input type="number" min="0" max="5" step="0.1" value={rating} onChange={(e) => setRating(e.target.value)} required />
            </div>

            <button type="submit">Add Resource</button>
        </form>
    );
}