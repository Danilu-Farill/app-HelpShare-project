import React from 'react';

export interface Donation {
  id: number;
  name: string;
  description: string;
  type: 'product' | 'service';
}

interface DonationsListProps {
  donations: Donation[];
}

const ProductDonationsList: React.FC<DonationsListProps> = ({ donations }) => {
  return (
    <ul>
      {donations.filter(donation => donation.type === 'product').map((donation, index) => (
        <li key={index}>
          <h4>{donation.name}</h4>
          <p>{donation.description}</p>
        </li>
      ))}
    </ul>
  );
};

const ServiceDonationsList: React.FC<DonationsListProps> = ({ donations }) => {
  return (
    <ul>
      {donations.filter(donation => donation.type === 'service').map((donation, index) => (
        <li key={index}>
          <h4>{donation.name}</h4>
          <p>{donation.description}</p>
        </li>
      ))}
    </ul>
  );
};



export { ProductDonationsList, ServiceDonationsList };