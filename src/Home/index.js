import Search from "./Search/Index";
import ClientDetailsList from "./ClientDetails/Client_Details_List";

const Home = () => {
    return (
        <div className="home">
            <Search />
            <ClientDetailsList />
        </div>
     );
}
 
export default Home;