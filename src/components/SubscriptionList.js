import React from 'react';
import './SubscriptionList.css';

const SubscriptionList = ({ subscriptions, onShowDetails }) => {
  return (
    <div className="subscription-container">
      <h2 className='subscription-header'>Subscriptions</h2>
      <ul className="subscription-list">
        {subscriptions.map(subscription => (
          <li className="list-item" key={subscription.id} onClick={() => onShowDetails(subscription)}>
            <h3>{subscription.title} 🍵 </h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SubscriptionList;