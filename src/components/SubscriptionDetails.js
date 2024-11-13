import React, { useState, useEffect } from 'react';
import './SubscriptionDetails.css';
import { getSubscriptionById, updateSubscriptionStatus, updateSubscriptionFrequency} from '../services/subscriptionService';

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

  const handleFrequencyChange = async (newFrequency) => {
    if (details) {
      const success = await updateSubscriptionFrequency(details.id, newFrequency);
      if (success) {
        setDetails({ ...details, frequency: newFrequency });
      } else {
        console.error('Failed to update subscription frequency');
      }
    }
  };

  if (!details) return <p>Loading...</p>;

  const { title, description, price, status, teas, customer, frequency } = details;

  const availableFrequencies = frequency === 'monthly'
  ? ['weekly', 'biweekly']
  : frequency === 'weekly'
  ? ['monthly', 'biweekly']
  : ['monthly', 'weekly'];

  console.log(details);
  return (
    <div className="subscription-details">
      <h2>{title} 🍵 </h2>
      <hr />
      <h3>Details</h3>
      <p>Price: ${parseFloat(price).toFixed(2)}</p>
      <p>
        Status: {status}
        <button className="status-button" onClick={handleStatusToggle}>
          {status === 'active' ? 'Pause Subscription' : 'Resume Subscription'}
        </button>  
      </p>
      <p>Frequency: {frequency}</p>
      <label htmlFor="frequency-select">Change Frequency:</label>
      
      <select 
        value={frequency} 
        onChange={(e) => handleFrequencyChange(e.target.value)}
        className="frequency-selector"
      >
        <option value="">Select frequency</option>
        {availableFrequencies.map((freq, index) => (
          <option key={index} value={freq}>
            {freq.charAt(0).toUpperCase() + freq.slice(1)}
          </option>
        ))}
      </select>

      <hr />
      <h3>Teas</h3>
      <ul>
        {teas && teas.length > 0 ? teas.map((tea, index) => (
          <li className="tea" key={index}>
            <strong>{tea.title}</strong>: { tea.description } <br />
            <em><strong>Temperature:</strong> {tea.temperature}°C</em><br />
            <em><strong>Brew Time:</strong> {tea.brew_time} minutes</em>
          </li>
        )) : <li>No teas</li>}
      </ul>
      <hr />

      <h3>Customer Information</h3>
      { customer ? (
        customer.map((cust, index) => (
          <div key={index}>
            <p>Name: { cust.first_name } { cust.last_name }</p>
            <p>Email: { cust.email }</p>
            <p>Address: { cust.address }</p>
            <hr />
          </div>
        ))
      ) : (
        <p>No customer information</p>
      )}
    </div>
  )
}

export default SubscriptionDetails;