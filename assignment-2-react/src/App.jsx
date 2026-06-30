import React, { useState } from 'react';
import ResourceList from './ResourceList';
import AddResourceForm from './AddResourceForm';

export default function App() {
  // Main state holding the hardcoded array
  const [resources, setResources] = useState([
    { id: 1, title: 'HTML & CSS Crash Course', category: 'Frontend', rating: 4.8 },
    { id: 2, title: 'Database Fundamentals', category: 'Backend', rating: 4.2 }
  ]);

  // State for Bonus 1: Category Filter
  const [filterCategory, setFilterCategory] = useState('All');

  // Function to add a new resource (passed down to the form)
  const handleAddResource = (newResource) => {
    setResources([...resources, newResource]);
  };

  // Filter logic for the displayed list
  const displayedResources = filterCategory === 'All'
    ? resources
    : resources.filter(res => res.category === filterCategory);

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'sans-serif' }}>
      <h2>TechLabs Learning Hub</h2>

      {/* Bonus 1: Filter Dropdown */}
      <div style={{ marginBottom: '20px' }}>
        <label><strong>Filter by Category: </strong></label>
        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
          <option value="All">All</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
          <option value="Design">Design</option>
        </select>
      </div>

      <ResourceList resources={displayedResources} />
      <AddResourceForm onAddResource={handleAddResource} />
    </div>
  );
}