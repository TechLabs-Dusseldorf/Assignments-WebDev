import React from 'react';
import ResourceCard from './ResourceCard';

export default function ResourceList({ resources }) {
    // Empty State handling
    if (resources.length === 0) {
        return <p style={{ color: 'gray', fontStyle: 'italic' }}>No resources found. Add a new one below!</p>;
    }

    // List Rendering with .map() and key props
    return (
        <div>
            {resources.map((resource) => (
                <ResourceCard
                    key={resource.id}
                    title={resource.title}
                    category={resource.category}
                    rating={resource.rating}
                />
            ))}
        </div>
    );
}