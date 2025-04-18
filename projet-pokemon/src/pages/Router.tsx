import { Routes, Route } from 'react-router-dom';
import Accueil from "./Accueil";
import Contact from "./Contact";
import ListCard from "./ListCard";
import Pokeswipe from "./pokeSwipe";
import Login from "./Login";
import Register from './Register';
import CardDetails from "../components/CardDetails";
import RequireAuth from '../components/RequireAuth'; 
import FunZone from './FunZone';
import NotFound from "./NotFound";

const Router : React.FC = () => {
    return (
 
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
                <Route path="/list-card" element={<ListCard />} />
                <Route path="/details/:id" element={<CardDetails />} />
                <Route path="/fun" element={<FunZone />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/register" element={<Register />} />
           <Route
  path="/pokeSwipe"
  element={
    <RequireAuth>
      <Pokeswipe />
    </RequireAuth>
  }
/>
            <Route path="*" element={<NotFound />} />
        </Routes>
       
    );
    }


export default Router;
