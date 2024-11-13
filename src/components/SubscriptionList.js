import React from 'react';
import './SubscriptionList.css';

const SubscriptionList = ({ subscriptions, onShowDetails }) => {
  return (
    <div className="subscription-list">
      <h2>Subscriptions</h2>
      <ul>
        {subscriptions.map(subscription => (
          <li key={subscription.id} onClick={() => onShowDetails(subscription)}>
            <h3>{subscription.title} 🍵 </h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscriptionList;