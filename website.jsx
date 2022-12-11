import React, { useState } from 'react';
import './styles.css';

const services = [  {    id: 1,    name: 'Web Development',    image: 'https://via.placeholder.com/150'  },  {    id: 2,    name: 'Mobile Development',    image: 'https://via.placeholder.com/150'  },  {    id: 3,    name: 'Software Development',    image: 'https://via.placeholder.com/150'  }];

const team = [  {    id: 1,    name: 'John Doe',    image: 'https://via.placeholder.com/150'  },  {    id: 2,    name: 'Jane Smith',    image: 'https://via.placeholder.com/150'  },  {    id: 3,    name: 'Alex Johnson',    image: 'https://via.placeholder.com/150'  }];

const App = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <header>
        <h1>Developer Company</h1>
        <nav>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="services">
          <h2>Services</h2>
          <ul>
            {services.map(service => (
              <li key={service.id}>
                <img src={service.image} alt={service.name} />
                <h3>{service.name}</h3>
                <button onClick={() => setSelectedService(service)}>Learn More</button>
              </li>
            ))}
          </ul>
        </section>
        {selectedService && (
          <section id="selected-service">
            <h2>{selectedService.name}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button onClick={() => setSelectedService(null)}>Close</button>
          </section>
        )}
        <section id="team">
          <h2>Team</h2>
          <ul>
            {team.map(member => (
              <li key={member.id}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
              </li>
            ))}
          </ul>
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <form>
            <label>
              Name: kkm
              <input type="text"/>
              </section>
              )}
