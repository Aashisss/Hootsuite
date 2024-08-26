import React from 'react';

function Alerts({ alerts, onResolve }) {
  return (
    <div>
      <h2>Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id}>
            {alert.message}
            <button onClick={() => onResolve(alert.id)}>Resolve</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Alerts;
