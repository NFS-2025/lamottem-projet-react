import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Accueil from "./Accueil";
import Contact from "./Contact";
import ListCard from "./ListCard";
import CardDetails from "../components/CardDetails";
import NotFound from "./NotFound";

const Router : React.FC = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/contact" element={<Contact />} />
                <Route path="/list-card" element={<ListCard />} />
                 <Route path="/details/:id" element={<CardDetails />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
    );
    }


export default Router;
