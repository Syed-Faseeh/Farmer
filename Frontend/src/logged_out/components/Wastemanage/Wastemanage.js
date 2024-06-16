import React, { useState } from "react";
import "./Wastemanage.css";
import firebase from 'firebase/compat/app';


function Wastemanage({firstName, middleName}) {
  const [wasteLocation, setWasteLocation] = useState("");
  const [methode, setMethode] = useState("");
  const [sustainability, setSustainability] = useState("");
  const [scale, setScale] = useState("");
  const [localRegulations, setLocalRegulations] = useState("");
  const [significantPractice, setSignificantPractice] = useState("");
  const [steps, setSteps] = useState("");
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("");
  const [hasBiogas, setHasBiogas] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [manureDecomposition, setManureDecomposition] = useState(false);
  const [additionalInformation, setAdditionalInformation] = useState("");
  
  // const [gender, setGender] = useState("");
  // const [location, setLocation] = useState({
  //   country: "",
  //   county: "",
  //   subCounty: "",
  //   area: "",
  // });
  // const [ageBracket, setAgeBracket] = useState("");
  // const [educationLevel, setEducationLevel] = useState("");
  // const [hasOtherIncome, setHasOtherIncome] = useState("No");
  // const [receivedAgriculturalTraining, setReceivedAgriculturalTraining] =
  //   useState("No");
  // const [interactedWithFarmingTech, setInteractedWithFarmingTech] =
  //   useState("No");
  // const [farmingTechDetails, setFarmingTechDetails] = useState("");
  // const [ownsFarmMachinery, setOwnsFarmMachinery] = useState("No");
  // const [farmSize, setFarmSize] = useState("");
  // const [livestockProductionType, setLivestockProductionType] = useState("");
  // const [animals, setAnimals] = useState([]);
  // const [herdSize, setHerdSize] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data1 = JSON.parse(localStorage.getItem('farmerregistration'));
    const data2 = JSON.parse(localStorage.getItem('farm-housing-data'));
    const data3 = JSON.parse(localStorage.getItem('nutrition-data'));
    const data4 = {wasteLocation,methode,sustainability,scale,localRegulations,significantPractice,steps,name,relation,hasBiogas,phoneNumber,email,manureDecomposition
      ,additionalInformation
    }
    const data = {...data1, ...data2, ...data3, ...data4}
    const firestore = firebase.firestore();
    alert("Form submitted. Implement submission logic.");
    try{
      await firestore.collection('farmers').doc(firstName + middleName).set(data);
      console.log("Data submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  // const handleAnimalChange = (event, animal) => {
  //   if (event.target.checked) {
  //     setAnimals((prevAnimals) => [...prevAnimals, animal]);
  //   } else {
  //     setAnimals((prevAnimals) => prevAnimals.filter((a) => a !== animal));
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Waste Management</h2>
      {/* Input for First Name */}
      <label>
        Where do you dispose your farm waste?
        <input
          type="text"
          value={wasteLocation}
          onChange={(e) => setWasteLocation(e.target.value)}
        />
      </label>
      <label>
        How do you dispose your waste?
        <input
          type="text"
          value={methode}
          onChange={(e) => setMethode(e.target.value)}
        />
      </label>
      <label className="label">
        Do you have any biogas structures?
        <label className="radio-group">
          Yes
          <input
            type="radio"
            name="hasBiogas"
            value="Yes"
          checked={hasBiogas === "Yes"}
            onChange={() => setHasBiogas("Yes")}
          />
        </label>
        <label className="radio-group">
          No
          <input
            type="radio"
            name="hasBiogas"
            value="No"
            checked={hasBiogas === "No"}
            onChange={() => setHasBiogas("No")}
          />
        </label>
      </label>
      <label className="label">
        Do you have any manure decomposition sites?
        <label className="radio-group">
          Yes
          <input
            type="radio"
            name="manureDecomposition"
            value="Yes"
            checked={manureDecomposition === "Yes"}
            onChange={() => setManureDecomposition("Yes")}
          />
        </label>
        <label className="radio-group">
          No
          <input
            type="radio"
            name="hasBiogas"
            value="No"
            checked={manureDecomposition === "No"}
            onChange={() => setManureDecomposition("No")}
          />
        </label>
      </label>
      <br></br>
      <br></br>
      <label className="label">
        If no, how are you planning to ensure environmental sustainability?
        <input
          type="text"
          value={sustainability}
          onChange={(e) => setSustainability(e.target.value)}
        />
      </label>
      <label className="label">
        If yes, what is the scale of production?
        <input
          type="text"
          value={scale}
          onChange={(e) => setScale(e.target.value)}
        />
      </label>
      <label className="label">
        Specify any significant practices:
        <input
          type="text"
          value={significantPractice}
          onChange={(e) => setSignificantPractice(e.target.value)}
        />
      </label>
      <br></br>
      <br></br>

      <h2 className="form-heading">Regulation Compliance</h2>
      <label className="label">
        Are you aware of and compiance with local regulations regarding urban
        farming?
        <label className="radio-group">
          Yes
          <input
            type="radio"
            name="localRegulations"
            value="Yes"
            checked={localRegulations === "Yes"}
            onChange={() => setLocalRegulations("Yes")}
          />
        </label>
        <label className="radio-group">
          No
          <input
            type="radio"
            name="localRegulations"
            value="No"
            checked={localRegulations === "No"}
            onChange={() => setLocalRegulations("No")}
          />
        </label>
        <label className="radio-group">
          No
          <input
            type="radio"
            name="localRegulations"
            value="Not Sure"
            checked={localRegulations === "Not Sure"}
            onChange={() => setLocalRegulations("Not Sure")}
          />
        </label>
        <label className="label">
          If no, please describe steps taken or planned to ensure compliance?
          <input
            type="text"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </label>
      </label>
      <h2 className="form-heading">Emergency Contacts</h2>
      <p>Please share contact informatoin of your next of kin or emergency contact.</p>
      <label>
        Full Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Relation:
        <input
          type="text"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
      </label>
      <label>
        Phone Number:
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <fieldset>
        <legend>Additional comments or special reqiremenets</legend>
        <input
          type="text"
          value={additionalInformation}
          onChange={(e) => setAdditionalInformation(e.target.value)}
        />
        
      </fieldset>

      {/* <button type="submit">Save</button> */}
      <button className="button" type="submit" >
        Submit
      </button>
    </form>
  );
}

export default Wastemanage;
