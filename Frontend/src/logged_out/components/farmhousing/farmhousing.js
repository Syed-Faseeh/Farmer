import React, { useState } from 'react';
import './farmhousing.css';
import {useHistory} from "react-router-dom"  

function FarmHousing() {
  // State variables
  const [housingType, setHousingType] = useState('');
  const [housingCondition, setHousingCondition] = useState('');
  const [numWorkers, setNumWorkers] = useState('');
  const [vaccinationName, setVaccinationName] = useState('');
  const [animalHealthStatus, setAnimalHealthStatus] = useState('');
  const [vaccinationDoses, setVaccinationDoses] = useState('');
  const [upcomingVaccination, setUpcomingVaccination] = useState('');
  const [outbreakSigns, setOutbreakSigns] = useState('');
  const [dewormingSchedule, setDewormingSchedule] = useState('');
  const [tickControlSchedule, setTickControlSchedule] = useState('');
  const [vetContacts, setVetContacts] = useState('');
  const [herdHealthComments, setHerdHealthComments] = useState('');
  const [hasBreedingCalendar, setHasBreedingCalendar] = useState(false);
  const [estrusCycleFollowup, setEstrusCycleFollowup] = useState('');
  const [breedingSchedule, setBreedingSchedule] = useState('');
  const [breedingPlanEffectiveness, setBreedingPlanEffectiveness] = useState('');
  const [generalFarmCondition, setGeneralFarmCondition] = useState('');
  const hist = useHistory();

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault();
    // Implement submission logic here
    alert('Form submitted.');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Farm Housing</h2>

      {/* Farm Housing Information */}
      <label>
        Type of Housing Structures:
        <select value={housingType} onChange={(e) => setHousingType(e.target.value)}>
          <option value="Pens">Pens</option>
          <option value="Stables">Stables</option>
          <option value="Shelters">Shelters</option>
          <option value="Open field">Open field</option>
        </select>
      </label>

      <br></br>

      <label>
        Condition of Pens or Stables:
        <select
          value={housingCondition}
          onChange={(e) => setHousingCondition(e.target.value)}
        >
          <option value="Extremely bad">Extremely bad</option>
          <option value="Bad">Bad</option>
          <option value="Neutral">Neutral</option>
          <option value="Good">Good</option>
          <option value="Excellent">Excellent</option>
        </select>
      </label>
      <br></br>

      <label>
        Number of People Working on Your Farm:
        <input
          type="number"
          value={numWorkers}
          onChange={(e) => setNumWorkers(e.target.value)}
        />
      </label>
      <br></br>

      {/* Veterinary Information */}
      <h3 className="form-heading">Veterinary Information</h3>
      <label>
        Vaccination Name/Take Picture for Each Animal:
        <input
          type="text"
          value={vaccinationName}
          onChange={(e) => setVaccinationName(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Health Status of the Animal/Herd:
        <select
          value={animalHealthStatus}
          onChange={(e) => setAnimalHealthStatus(e.target.value)}
        >
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Average">Average</option>
          <option value="Bad">Bad</option>
          <option value="Worst">Worst</option>
        </select>
      </label>
      <br></br>

      <label>
        Administered Vaccination Doses:
        <input
          type="text"
          value={vaccinationDoses}
          onChange={(e) => setVaccinationDoses(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Upcoming Vaccination Program:
        <input
          type="text"
          value={upcomingVaccination}
          onChange={(e) => setUpcomingVaccination(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Any Signs of Outbreaks:
        <input
          type="text"
          value={outbreakSigns}
          onChange={(e) => setOutbreakSigns(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Deworming Schedule:
        <input
          type="text"
          value={dewormingSchedule}
          onChange={(e) => setDewormingSchedule(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Tick Control Schedule:
        <input
          type="text"
          value={tickControlSchedule}
          onChange={(e) => setTickControlSchedule(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Contacts of the Responsible Veterinarian:
        <input
          type="text"
          value={vetContacts}
          onChange={(e) => setVetContacts(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        Comments on the Herd Health:
        <input
          type="text"
          value={herdHealthComments}
          onChange={(e) => setHerdHealthComments(e.target.value)}
        />
      </label>
      <br></br>

      {/* Breeding and Reproduction Information */}
      <h3 className="form-heading">Breeding and Reproduction Information</h3>
      <label>
        Do you have a Breeding Calendar for Your Animals?
        <label>
          <input
            type="radio"
            name="hasBreedingCalendar"
            value="Yes"
            checked={hasBreedingCalendar === true}
            onChange={() => setHasBreedingCalendar(true)}
          />
          Yes
        </label>
        <br></br>

        <label>
          <input
            type="radio"
            name="hasBreedingCalendar"
            value="No"
            checked={hasBreedingCalendar === false}
            onChange={() => setHasBreedingCalendar(false)}
          />
          No
        </label>
        <br></br>

      </label>

      <label>
        How Do You Follow Up on Estrus Cycle?
        <input
          type="text"
          value={estrusCycleFollowup}
          onChange={(e) => setEstrusCycleFollowup(e.target.value)}
        />
      </label>
      <br></br>

      <label>
        What is the General Farm's Breeding Schedule?
        <textarea
          value={breedingSchedule}
          onChange={(e) => setBreedingSchedule(e.target.value)}
        ></textarea>
      </label>
      <br></br>

      <label>
        How Effective is the Current Breeding Plan?
        <select
          value={breedingPlanEffectiveness}
          onChange={(e) => setBreedingPlanEffectiveness(e.target.value)}
        >
          <option value="Very effective">Very effective</option>
          <option value="Effective">Effective</option>
          <option value="Neutral">Neutral</option>
          <option value="Ineffective">Ineffective</option>
          <option value="Unknown">Unknown</option>
        </select>
      </label>
      <br></br>
      <br></br>

      <label>
        General Farm Condition:
        <select
          value={generalFarmCondition}
          onChange={(e) => setGeneralFarmCondition(e.target.value)}
        >
          <option value="Excellent">Excellent</option>
          <option value="Good">Good</option>
          <option value="Neutral">Neutral</option>
          <option value="Bad">Bad</option>
          <option value="Worse">Worse</option>
        </select>
      </label>
      <br></br>
      <br></br>
      <button className="button" type="submit"  onClick={() => {
        localStorage.setItem("farm-housing-data", JSON.stringify({housingType,housingCondition,numWorkers,vaccinationName,animalHealthStatus,vaccinationDoses,upcomingVaccination,outbreakSigns,dewormingSchedule
          ,tickControlSchedule,vetContacts,herdHealthComments,hasBreedingCalendar,estrusCycleFollowup,breedingSchedule,breedingPlanEffectiveness,generalFarmCondition
        }))
        hist.push('/nutrition')}}>Next</button>
      {/* <button type="submit">Submit</button> */}
    </form>
  );
}

export default FarmHousing;
