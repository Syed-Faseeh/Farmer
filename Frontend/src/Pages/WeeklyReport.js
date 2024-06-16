import React, { useState } from 'react';
import AppLayout from '../layout/AppLayout';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyChrRYhNgnGh0C8a5rnkSYcr1hFCKX9eS8",
    authDomain: "objectdetect-9b57f.firebaseapp.com",
    projectId: "objectdetect-9b57f",
    databaseURL: "https://objectdetect-9b57f-default-rtdb.asia-southeast1.firebasedatabase.app",
    storageBucket: "objectdetect-9b57f.appspot.com",
    messagingSenderId: "929994843586",
    appId: "1:929994843586:web:5983853990f4ca0451e25b",
    measurementId: "G-6XL0N5YM85"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const firestore = firebase.firestore();

const WeeklyReports = () => {
    const [user, setUser] = useState({
        month: '',
        week: '',
        animalID: "",
        breed: "",
        heardNumber: "",
        age: "",
        breedingSchedule: "",
        animalIDTagNumber: "",
        type: "",
        gender: "",
        age2: "",
        breed2: "",
        aliveDead: "",
        enterCurrentWeight: "",
        expectedWeightSlaughter: "",
    });

    const [weekData, setWeekData] = useState([]);
    const [error, setError] = useState('');

    const getUserData = (event) => {
        var name = event.target.name;
        var value = event.target.value;
        setUser({ ...user, [name]: value });
    };

    const handleCO2Submit = async (e) => {
        e.preventDefault();

        if (!user.animalID) {
            setError("Animal ID cannot be empty");
            return;
        }

        setError('');

        var FeedsConsumedKgs = tableData.reduce(function(prev, cur) {
            return prev + parseFloat((cur.FeedsConsumedKgs == null || cur.FeedsConsumedKgs === '') ? 0 : cur.FeedsConsumedKgs);
        }, 0);

        var WaterConsumed = tableData.reduce(function(prev, cur) {
            return prev + parseFloat((cur.WaterConsumed == null || cur.WaterConsumed === '') ? 0 : cur.WaterConsumed);
        }, 0);

        var WeightKgs = tableData.reduce(function(prev, cur) {
            return prev + parseFloat((cur.WeightKgs == null || cur.WeightKgs === '') ? 0 : cur.WeightKgs);
        }, 0);

        const animalID = user.animalID;

        // Create a timestamp and convert it to a string to use as document ID
        const timestamp = new Date().toISOString();
        const data = {
            FeedsConsumedKgs,
            WaterConsumed,
            WeightKgs,
            weekInfo: user,
            weekDetails: tableData,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        };
        const data2 = {
            
        };

        try {
            await firestore.collection('metadata').doc(animalID).set(data2);
            await firestore.collection(animalID).doc(timestamp).set(data);
            console.log("Data submitted successfully!");

            setUser({
                month: '',
                week: '',
                animalID: '',
                breed: '',
                heardNumber: '',
                age: '',
                breedingSchedule: '',
                animalIDTagNumber: "",
                type: "",
                gender: "",
                age2: "",
                breed2: "",
                aliveDead: "",
                enterCurrentWeight: "",
                expectedWeightSlaughter: "",
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
       
    }

    const [tableData, setTableData] = useState(Array.from({ length: 7 }, () => ({
        DATE: '',
        AnimalIDNumber: '',
        FeedsConsumedKgs: '',
        WaterConsumed: '',
        WeightKgs: '',
        CalvingRecords: '',
        CullingRecords: '',
        VaccinationGiven: '',
        DewormingTickControl: '',
        BreedingRecords: ''
    })));

    const handleInputChange = (value, rowIndex, propertyName) => {
        const newData = [...tableData];
        newData[rowIndex] = { ...newData[rowIndex], [propertyName]: value };
        setTableData(newData);
    };

    return (
        <>
            <AppLayout isSidebar={true}>
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-4 mt-2">
                            <label htmlFor="">Month</label>
                            <select className="form-select" aria-label="Default select example" name='month' value={user.month} onChange={getUserData}>
                                <option selected>Select Month</option>
                                <option value="January">January</option>
                                <option value="February">February</option>
                                <option value="March">March</option>
                                <option value="April">April</option>
                                <option value="May">May</option>
                                <option value="June">June</option>
                                <option value="July">July</option>
                                <option value="August">August</option>
                                <option value="September">September</option>
                                <option value="October">October</option>
                                <option value="November">November</option>
                                <option value="December">December</option>
                            </select>
                        </div>
                        <div className="col-4 mt-2">
                            <label htmlFor="">Week</label>
                            <select className="form-select" aria-label="Default select example" name='week' value={user.week} onChange={getUserData}>
                                <option selected>Select Week</option>
                                <option value="First">First</option>
                                <option value="Second">Second</option>
                                <option value="Third">Third</option>
                                <option value="Fourth">Fourth</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="container mt-5">
                    <form method='POST'>
                        <h2 className='text-center mb-4'>Registration Data</h2>
                        {error && <div className="alert alert-danger">{error}</div>}
                        <div className="row mb-2">
                            <div className="form-group col-md-4">
                                <label htmlFor="">Animal ID Number</label>
                                <input type="number" className="form-control" id="" name='animalID' value={user.animalID} onChange={getUserData} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Breed</label>
                                <input type="text" className="form-control" id="" name='breed' value={user.breed} onChange={getUserData} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Heard Number</label>
                                <input type="number" className="form-control" id="" name='heardNumber' value={user.heardNumber} onChange={getUserData} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-md-4">
                                <label htmlFor="">Age</label>
                                <input type="number" className="form-control" id="" name='age' value={user.age} onChange={getUserData} />
                            </div>
                            <div className="form-group col-md-4">
                                <label htmlFor="">Breeding schedule</label>
                                <input type="text" className="form-control" id="" name='breedingSchedule' value={user.breedingSchedule} onChange={getUserData} />
                            </div>
                        </div>

                    </form>
                </div>
                <div className="container mt-5">
                    <div className="row">
                        <form>
                            <h2 className='text-center mb-4'>Enter week of year</h2>
                            <div className="row mb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Animal ID Tag Number</label>
                                    <input type="number" className="form-control" id="" name='animalIDTagNumber' value={user.animalIDTagNumber} onChange={getUserData} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Type</label>
                                    <input type="text" className="form-control" id="" name='type' value={user.type} onChange={getUserData} />
                                </div>

                                <div className="form-group col-md-4">
                                    <label htmlFor="">Gender</label>
                                    <div className='d-flex mt-2'>
                                        <div className="form-check me-5">
                                            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault1" checked={user.gender === 'Male'} value="Male" onChange={() => setUser({ ...user, ['gender']: 'Male' })} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                Male
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender" id="flexRadioDefault2" checked={user.gender === 'Female'} value="Female" onChange={() => setUser({ ...user, ['gender']: 'Female' })} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                Female
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Age</label>
                                    <input type="number" className="form-control" id="" name='age2' value={user.age2} onChange={getUserData} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Breed</label>
                                    <input type="text" className="form-control" id="" name='breed2' value={user.breed2} onChange={getUserData} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Alive/Dead</label>
                                    <div className='d-flex mt-2'>
                                        <div className="form-check me-5">
                                            <input className="form-check-input" type="radio" name="aliveDead" id="flexRadioDefault3" checked={user.aliveDead === 'Alive'} value="Alive" onChange={() => setUser({ ...user, ['aliveDead']: 'Alive' })} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault3">
                                                Alive
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="aliveDead" id="flexRadioDefault4" checked={user.aliveDead === 'Dead'} value="Dead" onChange={() => setUser({ ...user, ['aliveDead']: 'Dead' })} />
                                            <label className="form-check-label" htmlFor="flexRadioDefault4">
                                                Dead
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Enter Current Weight</label>
                                    <input type="number" className="form-control" id="" name='enterCurrentWeight' value={user.enterCurrentWeight} onChange={getUserData} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="">Expected Weight at Slaughter</label>
                                    <input type="number" className="form-control" id="" name='expectedWeightSlaughter' value={user.expectedWeightSlaughter} onChange={getUserData} />
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <table className='dynamic-table'>
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Animal ID Number</th>
                                        <th>Feeds Consumed Kgs</th>
                                        <th>Water Consumed</th>
                                        <th>Weight Kgs</th>
                                        <th>Calving Records</th>
                                        <th>Culling Records</th>
                                        <th>Vaccination Given</th>
                                        <th>Deworming/Tick control</th>
                                        <th>Breeding Records</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData.map((rowData, rowIndex) => (
                                        <tr key={rowIndex}>
                                            {Object.keys(rowData).map((propertyName, colIndex) => (
                                                <td className='dynamic-td' key={colIndex}>
                                                    <input className='w-100'
                                                        type="text"
                                                        value={rowData[propertyName]}
                                                        onChange={(e) => handleInputChange(e.target.value, rowIndex, propertyName)}
                                                    />
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>        
                    </div>
                    <div className='d-flex justify-content-end'>
                        <button type='button' className='mt-2 btn btn-primary' onClick={handleCO2Submit}>Submit</button>
                    </div>
                </div>

            </AppLayout>
        </>
    )
}

export default WeeklyReports;
