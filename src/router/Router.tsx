import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Business from "../pages/Business";
import Franchise from "../pages/Franchise";
import PressCenter from "../pages/PressCenter";
import Services from "../pages/Services";
import IIN from "../pages/IIN";
import Tracking from "../pages/Tracking";
import CalculaterPage from "../pages/Calculater";
import LTL from "../pages/LTL";
import RulesAcceptance from "../pages/RulesAcceptance ";
import Invest from "../pages/Invest";
import ProfileMain from "../pages/profile/Main/ProfileMain";
import Notification from "../pages/profile/Notification/Notification";
import NotificationById from "../pages/profile/Notification/[id]";
import ProfileMainById from "../pages/profile/Main/[id]";
import Contacts from "../pages/Contacts";
import History from "../pages/History";
import Guide from "../pages/Guide";
import Career from "../pages/Career";
import Tariff from "../pages/Tariff";
import Package from "../pages/profile/Package/Package";
import Media from "../pages/Media";
import Map from "../pages/Map";
import Cargo from "../pages/Cargo";
import { Privacy } from "../pages/Privacy";

const Routers = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Business />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/presscenter" element={<PressCenter />} />
        <Route path="/services" element={<Services />} />
        <Route path="/iin" element={<IIN />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/calculater" element={<CalculaterPage />} />
        <Route path="/ltl" element={<LTL />} />
        <Route path="/rulesacceptance" element={<RulesAcceptance />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/media" element={<Media />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/history" element={<History />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/career" element={<Career />} />
        <Route path="/tariff" element={<Tariff />} />
        <Route path="/shops" element={<Map />} />
        <Route path="/cargo" element={<Cargo />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/profile/main" element={<ProfileMain />} />
        <Route path="/profile/main/change" element={<ProfileMainById />} />
        <Route path="/profile/package" element={<Package />} />
        <Route path="/profile/notification" element={<Notification />}/>
        <Route path="/profile/notification/:id" element={<NotificationById />}/>
      </Routes>
    </Router>
  );
};

export default Routers;
