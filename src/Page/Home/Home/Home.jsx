import Banner from "../Banner/Banner";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import TopClass from "../TopClass/TopClass";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TopClass></TopClass>
            <PopularInstructors></PopularInstructors>
        </div>
    );
};

export default Home;