import Banner from "../Banner/Banner";
import Benefits from "../Benefits/Benefits";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TopClass from "../TopClass/TopClass";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClass></TopClass>
            <PopularInstructors></PopularInstructors>
            <Benefits></Benefits>
        </div>
    );
};

export default Home;