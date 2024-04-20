import React from 'react';
import { TeamData } from '../Data/WebData'; // Assuming TeamData is imported correctly

export const Team = () => {
  return (
    <section className="Team">
      <div className="title">
        <h1>Meet Our Expert Team</h1>
        <p>Our success stems from a passionate and dedicated team committed to delivering exceptional results.</p>
      </div>

      <div className="card-container">
        {TeamData.map((teamMember) => (
          <div className="card" key={teamMember.id}>
            <img src={teamMember.img} alt={teamMember.name} />
            <h2>{teamMember.name}</h2>
            <p>{teamMember.position}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
