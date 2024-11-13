import React, { useState, useEffect } from 'react';
import SubscriptionList from '../components/SubscriptionList';
import Modal from '../components/Modal';
import SubscriptionDetails from '../components/SubscriptionDetails';
import { getSubscriptions } from '../services/subscriptionService';
import './App.css';

const App = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [selectedSubscription, setSelectedSubscription] = useState(null);

  useEffect(() => {
    const fetchSubscriptions = async () => {
      const data = await getSubscriptions();
      setSubscriptions(data);
    };
    fetchSubscriptions();
  }, []);

  const handleSubscriptionSelect = (subscription) => {
    setSelectedSubscription(subscription);
  };

  const handleModalClose = () => {
    setSelectedSubscription(null);
  };

  return (
    <div className="App">
      <h1 className="main-header">
        Tea Subscriptions 
        <img src="/assets/drinking_tea.jpg" alt="Subscription" style={{ width: '60px', height: '60px' }} ></img>   
      </h1>
      <SubscriptionList
        subscriptions={subscriptions}
        onShowDetails={handleSubscriptionSelect}
      />
      <Modal show={!!selectedSubscription} onClose={handleModalClose}>
        {selectedSubscription && (
          <SubscriptionDetails subscription={selectedSubscription} />
        )}
      </Modal>
    </div>
  )
}

export default App;