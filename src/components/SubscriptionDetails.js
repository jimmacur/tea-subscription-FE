import React, { useState, useEffect } from 'react';
import './SubscriptionDetails.css';
import { getSubscriptionById, updateSubscriptionStatus } from '../services/subscriptionService';

const SubscriptionDetails = ({ subscription }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => { 
      const data = await getSubscriptionById(subscription.id);
      setDetails(data);
    };
    fetchDetails();
  }, [subscription]);

    const handleStatusToggle = async () => {
    if (details) {
      const newStatus = details.status === 'active' ? 'canceled' : 'active';
      await updateSubscriptionStatus(details.id, newStatus);
      setDetails({ ...details, status: newStatus });
    }
  };

  if (!details) return <p>Loading...</p>;

  const { title, description, price, status, teas, customer, frequency } = details;

  console.log(details);
  return (
    <div className="subscription-details">
      <h2>{title}</h2>
      <hr />
      <h3>Details</h3>
      <p>Price: {price}</p>
      <p>Status: {status}</p>
      <p>Frequency: {frequency}</p>
      <hr />
      <h3>Teas</h3>
      <ul>
        {teas && teas.length > 0 ? teas.map((tea, index) => (
          <li key={index}>
            <strong>{tea.title}</strong>: { tea.description } 
          </li>
        )) : <li>No teas</li>}
      </ul>
      <hr />
      <h3>Customer Information</h3>
      { customer ? (
        <div>
          <p>Name: { customer.first_name } { customer.last_name }</p>
          <p>Email: { customer.email }</p>
          <p>Address: { customer.address }</p>
        </div>
      ) : (
        <p>No customer information</p>
      )}

      <button className="status-button" onClick={handleStatusToggle}>
        {status === 'active' ? 'Pause Subscription' : 'Resume Subscription'}
      </button>
    </div>
  )
}

export default SubscriptionDetails;