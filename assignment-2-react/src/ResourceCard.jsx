import React from 'react';

export default function ResourceCard({ title, category, rating }) {
    return (
        <div className="card" style={{ border: '1px solid #ccc', padding: '16px', margin: '8px 0', borderRadius: '8px' }}>
            <h3>
                {title}
                {/* Conditional Rendering for Top Rated Badge */}
                {rating >= 4.5 && <span style={{ marginLeft: '10px', fontSize: '14px', backgroundColor: '#ffd700', padding: '4px', borderRadius: '4px' }}>⭐ Top Rated</span>}
            </h3>
            <p><strong>Category:</strong> {category}</p>
            <p><strong>Rating:</strong> {rating} / 5</p>
        </div>
    );
}