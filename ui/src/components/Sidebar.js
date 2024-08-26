import React from 'react';

function Sidebar({ onFilterChange }) {
  return (
    <aside style={{ padding: '20px', borderRight: '1px solid #ddd', width: '250px' }}>
      <h3>Filters</h3>
      {/* Date Range Picker */}
      <div>
        <label>Date Range:</label>
        <input type="date" onChange={(e) => onFilterChange('startDate', e.target.value)} />
        <input type="date" onChange={(e) => onFilterChange('endDate', e.target.value)} />
      </div>

      {/* Platform Selector */}
      <div>
        <label>Platform:</label>
        <select onChange={(e) => onFilterChange('platform', e.target.value)}>
          <option value="all">All</option>
          <option value="Twitter">Twitter</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
        </select>
      </div>

      {/* Keyword Input */}
      <div>
        <label>Keyword:</label>
        <input type="text" onChange={(e) => onFilterChange('keyword', e.target.value)} />
      </div>
    </aside>
  );
}

export default Sidebar;
