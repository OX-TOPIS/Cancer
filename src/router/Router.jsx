import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import BloodResults from "../pages/BloodResults/BloodResults";
import Appointment from "../pages/Appointment/Appointment";
import Contacts from "../pages/Contacts/Contacts";
import Effects from "../pages/Effects/Effects";
import PatientManual from "../pages/PatientManual/PatientManual";
import Login from "../pages/Authentication/Login";
import AppointmentDetails from "../pages/Appointment/AppointmentDetails";
import PostponeAppointment from "../pages/Appointment/PostponeAppointment";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
          path: "/BloodResults",
          element: <BloodResults/>
        },
        {
          path: "/Appointment",
          element: <Appointment/>,
        },
        {
          path: "/Appointment/AppointmentDetails",
          element: <AppointmentDetails/>,
        },
        {
          path: "/Appointment/PostponeAppointment",
          element: <PostponeAppointment/>,
        },
        {
          path: "/Contacts",
          element: <Contacts/>
        },
        {
          path: "/Effects",
          element: <Effects/>
        },
        {
          path: "/PatientManual",
          element: <PatientManual/>
        },
        {
          path: "/Login",
          element: <Login/>,
        },
        {
          path: "/Register",
          element: <Login/>,
        }
      ]
    }
  ]);

export default router;