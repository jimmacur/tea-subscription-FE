import React, { useState, useEffect } from 'react';
import { getSubscriptionById } from '../services/subscriptionService';

const SearchSubscription = ({ subscriptionId }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleSearch = async (id) => {
    setLoading(true);
    const subscription = await getSubscriptionById(id);
    if (subscription) {
      setSubscription([subscription]);
    } else {
      setSubscription([]);
    }
    setLoading(false);
  };

  return (
    <div className='search-container'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter subscription ID"
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>

      <div className='subscription-list'>
        {loading && <p>Loading...</p>}
        {subscription && subscription.length > 0 ? (
          <ul>
            {subscription.map((sub) => (
              <li key={sub.id}>
                <strong>{sub.title}</strong>
              </li>
            ))}
          </ul>
        ) : (
          <p>No subscriptions found</p>
        )}
      </div> 
    </div>
  );
};

export default SearchSubscription;