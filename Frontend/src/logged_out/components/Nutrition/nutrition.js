import React, { useState } from 'react';
import './nutrition.css';
import { useHistory } from "react-router-dom";

function NutritionForm() {
    const [FeedsType, setFeedsType] = useState('');
    const [Feedsource, setFeedsource] = useState('');
    const [Ifhomegrown, setIfhomegrown] = useState('');
    const [Concentratestype, setConcentratestype] = useState('');
    const [RoughAges, setRoughAges] = useState('');
    const [Unformulated, setUnformulated] = useState('');
    const [feedingSchedule, setFeedingSchedule] = useState('Once a day');
    const [concentratesAmount, setConcentratesAmount] = useState('');
    const [roughagesAmount, setRoughagesAmount] = useState('');
    const [mineralsAmount, setMineralsAmount] = useState('');
    const [waterSource, setWaterSource] = useState('Tap water');
    const [powerSource, setPowerSource] = useState('Electricity');
    const hist = useHistory();
    
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted. Implement submission logic.');
  };
 
 

  return (
    <form onSubmit={handleSubmit} className="form-container" >
      <h2 className="form-heading">Feeds and Nutrition</h2>
   
   
    
      <br></br>
      <br></br>

   
   
      

      <label>
        Age Bracket:
        <select
          value={FeedsType}
          onChange={(e) => setFeedsType(e.target.value)}>
          <option value="Concentrates">Concentrates</option>
          <option value="RoughAges">RoughAges</option>
          <option value="Others">Others</option>
          {/* Add other options similarly */}
        </select>
      </label>

      <br></br>
      <br></br>

      <label>
        Are the feeds   homegrown or commercially acquired:
        <input
          type="text"
          value={Feedsource}
          onChange={(e) => setFeedsource(e.target.value)}
        />
      </label>
      
      <br></br>
      <br></br>

      <label>
        If homegrown, what type of feeds do you farm:
        <input
          type="text"
          value={Ifhomegrown}
          onChange={(e) => setIfhomegrown(e.target.value)}
        />
      </label>

      <h3 className="form-heading">Concentrates</h3>
      <label>
    Dairy Cattle
    <input
        type="radio"
        name="Concentratestype"
        value=" Dairy Cattle(Dairy Meal)"
        checked={Concentratestype === ' Dairy Cattle(Dairy Meal)'}
        onChange={(e) => setConcentratestype(e.target.value)}
    />
    </label>
    <label>
    Beaf Cattle 
    <input
        type="radio"
        name="gender"
        value=" Beaf Cattle 'Dairy Meal, Beaf Fattener'"
        checked={Concentratestype === " Beaf Cattle 'Dairy Meal, Beaf Fattener'"}
        onChange={(e) => setConcentratestype(e.target.value)}
    />
    </label>
    <label>
    Pigs
    <input
        type="radio"
        name="gender"
        value="Pigs (Sow and weaner, Growers mash, pig Finisher)"
        checked={Concentratestype === 'Pigs (Sow and weaner, Growers mash, pig Finisher)'}
        onChange={(e) => setConcentratestype(e.target.value)}
    />
    </label>
    <h3 className="form-heading">RoughAges</h3>
    <label>
    Hay
    <input
        type="radio"
        name="Hay(Depends on grass used i.e Rhodes hay, oats hay)"
        value="Hay(Depends on grass used i.e Rhodes hay, oats hay)"
        checked={RoughAges === 'Hay(Depends on grass used i.e Rhodes hay, oats hay)'}
        onChange={(e) => setRoughAges(e.target.value)}
    />
    </label>
    <label>
    Silage 
    <input
        type="radio"
        name="Silage"
        value="Silage"
        checked={RoughAges === "Silage"}
        onChange={(e) => setRoughAges(e.target.value)}
    />
    </label>
    <label>
    Pasture
    <input
        type="radio"
        name="Pasture"
        value="Pasture"
        checked={RoughAges === 'Pasture'}
        onChange={(e) => setRoughAges(e.target.value)}
    />
    </label>
    <h3 className="form-heading">Unformulated feeds</h3>
    <label>
        Any feeds that's not commercially processed.:
        <input
          type="text"
          value={Unformulated}
          onChange={(e) => setUnformulated(e.target.value)}
        />
      </label>
      
      <br></br>
      <br></br>

{/* New Sections: Feeding Schedule and Feed Amounts */}
<h3 className="form-heading">Feeding Schedule</h3>
      <label>
        <input
          type="radio"
          name="feedingSchedule"
          value="Once a day"
          checked={feedingSchedule === 'Once a day'}
          onChange={(e) => setFeedingSchedule(e.target.value)}
        />
        Once a day
      </label>
      <label>
        <input
          type="radio"
          name="feedingSchedule"
          value="Twice a day"
          checked={feedingSchedule === 'Twice a day'}
          onChange={(e) => setFeedingSchedule(e.target.value)}
        />
        Twice a day
      </label>
      <label>
        <input
          type="radio"
          name="feedingSchedule"
          value="Thrice a day"
          checked={feedingSchedule === 'Thrice a day'}
          onChange={(e) => setFeedingSchedule(e.target.value)}
        />
        Thrice a day
      </label>
      <label>
        <input
          type="radio"
          name="feedingSchedule"
          value="Ad libitum"
          checked={feedingSchedule === 'Ad libitum'}
          onChange={(e) => setFeedingSchedule(e.target.value)}
        />
        Ad libitum
      </label>

      <br></br>
      <br></br>

      <h3 className="form-heading">Amounts of Each Category (kg)</h3>
      <label>
        Concentrates:
        <input
          type="number"
          value={concentratesAmount}
          onChange={(e) => setConcentratesAmount(e.target.value)}
        />
      </label>
      
      <br></br>

      <label>
        Roughages     :
        <input
          type="number"
          value={roughagesAmount}
          onChange={(e) => setRoughagesAmount(e.target.value)}
        />
      </label>
      
      <br></br>
      <label>
        Minerals:
        <input
          type="number"
          value={mineralsAmount}
          onChange={(e) => setMineralsAmount(e.target.value)}
        />
      </label>

      <br></br>
      <br></br>

      {/* New Sections: Water Source and Power Energy Source */}
      <h3 className="form-heading">Major Source of Water</h3>
      <label>
        <input
          type="radio"
          name="waterSource"
          value="Tap water"
          checked={waterSource === 'Tap water'}
          onChange={(e) => setWaterSource(e.target.value)}
        />
        Tap water
      </label>
      <label>
        <input
          type="radio"
          name="waterSource"
          value="Rainwater"
          checked={waterSource === 'Rainwater'}
          onChange={(e) => setWaterSource(e.target.value)}
        />
        Rainwater
      </label>
      
      <br></br>

      {/* Add other options similarly: Borehole, Dam, River, Lake, Others */}

      <h3 className="form-heading">Major Source of Power Energy</h3>
      <label>
        <input
          type="radio"
          name="powerSource"
          value="Electricity"
          checked={powerSource === 'Electricity'}
          onChange={(e) => setPowerSource(e.target.value)}
        />
        Electricity
      </label>
      <label>
        <input
          type="radio"
          name="powerSource"
          value="Solar energy"
          checked={powerSource === 'Solar energy'}
          onChange={(e) => setPowerSource(e.target.value)}
        />
        Solar energy
      </label>
      
      <br></br>
      <br></br>

      {/* <button type="submit">Save</button> */}
      <button className="button" type="submit"  onClick={() => {
        //Add other props here
        localStorage.setItem("nutrition-data", JSON.stringify({FeedsType,Feedsource,Ifhomegrown,Concentratestype,RoughAges,Unformulated,feedingSchedule,concentratesAmount,roughagesAmount,mineralsAmount,waterSource
          ,powerSource
        }))
        hist.push('/waste-manage')}} >Next</button>
    </form>
  );
}

export default NutritionForm;
