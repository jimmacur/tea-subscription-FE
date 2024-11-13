import React, { useState, useEffect } from 'react';
import './SubscriptionDetails.css';
import { getSubscriptionById } from '../services/subscriptionService';

const SubscriptionDetails = ({ subscription }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => { 
      const data = await getSubscriptionById(subscription.id);
      setDetails(data);
    };
    fetchDetails();
  }, [subscription]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="subscription-details">
      <h2>{details.name}</h2>
      <p>{details.description}</p>
      <p>Price: ${details.price}</p>
    </div>
  )
}

export default SubscriptionDetails;