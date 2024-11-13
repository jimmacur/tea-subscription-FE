import React, { useState } from 'react';
import './SubscriptionList.css';

const SubscriptionList = ({ subscriptions, onShowDetails }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredSubscriptions = subscriptions.filter(subscription => 
    subscription.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="subscription-container">
      <h2 className='subscription-header'>Subscriptions</h2>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search Subscriptions by Title"
        />
      </div>
      
      <ul className="subscription-list">
        {filteredSubscriptions.length > 0 ? (
          filteredSubscriptions.map(subscription => (
            <li 
              className="list-item" 
              key={subscription.id} 
              onClick={() => onShowDetails(subscription)}
            >
              <h3>{subscription.title} 🍵 </h3>
            </li>
          ))
        ) : (
          <h3>No subscriptions found</h3>
        )}
      </ul>
    </div>
  )
}

export default SubscriptionList;