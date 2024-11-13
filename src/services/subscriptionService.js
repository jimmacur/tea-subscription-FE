const API_URL = 'http://localhost:3000/api/v1';

export const getSubscriptions = async () => {
  try {
    const response = await fetch(`${API_URL}/subscriptions`);
    if (!response.ok) throw new Error('Failed to fetch subscriptions');
    const data = await response.json();
    return data;
  } catch (error) {
    return [];
  }
};

export const getSubscriptionById = async (id) => {
  try {
    const response = await fetch(`${API_URL}/subscriptions/${id}`);
    if (!response.ok) throw new Error('Failed to fetch subscription details');
    return await response.json();
  } catch (error) {
    console.error('Error fetching subscription details:', error);
    return null;
  }
};

export const updateSubscriptionStatus = async (id, newStatus) => {
  try {
    const response = await fetch(`${API_URL}/subscriptions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status: newStatus })
    });
    
    if (!response.ok) throw new Error('Failed to update subscription status');
    return true;
  } catch (error) {
    console.error('Error updating subscription status:', error);
    return false;
  }
}