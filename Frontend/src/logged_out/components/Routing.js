import React, { memo, useState } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../../shared/components/PropsRoute";
import Home from "./home/Home";
import Login from "./Login/Login";
import AboutPage from "./About/about";
import useLocationBlocker from "../../shared/functions/useLocationBlocker";
import Dashboard from "./Dashboard/Dashboard";
import AppLayout from "../../layout/AppLayout";
import WeeklyReports from "../../Pages/WeeklyReport";
import FarmerRegistrationForm from "./farmerregistration/farmerregistration"
import FarmHousing from "./farmhousing/farmhousing";
import NutritionForm from "./Nutrition/nutrition";
import Wastemanage from "./Wastemanage/Wastemanage";

function Routing(props) {
  const { selectHome, selectLogin, selectAbout } = props;
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');

  useLocationBlocker();
  return (
    <Switch>
      
        <PropsRoute path="/login" testProp="test" component={Login} selectLogin={selectLogin} />
        <PropsRoute
          path="/about"
          component={AboutPage}
          selectLogin={selectAbout}
        />
         <PropsRoute path="/WeeklyReport"  component={WeeklyReports}  />
        <PropsRoute path="/dashboard" component={Dashboard} />
        <PropsRoute path="/farmerregistration" firstName={firstName} setFirstName={setFirstName} middleName={middleName} setMiddleName={setMiddleName}  component={FarmerRegistrationForm}  />
        <PropsRoute path="/farmhousing" component={FarmHousing}  />
        <PropsRoute path="/nutrition" component={NutritionForm}  />
        <PropsRoute path="/waste-manage" firstName={firstName} middleName={middleName} component={Wastemanage}  />

        

        <PropsRoute path="/" component={Home} selectHome={selectHome} />
        
  


    </Switch>
  );
}

Routing.propTypes = {
  selectHome: PropTypes.func.isRequired,
  selectLogin: PropTypes.func.isRequired,
  selectAbout: PropTypes.func.isRequired,
};

export default memo(Routing);
