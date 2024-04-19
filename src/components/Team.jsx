import React from 'react';
import { TeamData } from '../Data/WebData'; // Assuming TeamData is imported correctly

export const Team = () => {
  return (
    <section className="Team">
      <div className="title">
        <h1>Our Team</h1>
        <p>Convallis turpis erat tempus, viverra aliquet. Nullam viverra nam auctor sit ipsum malesuada a, duis volutpat.</p>
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
