import Card from "./Card";

const Navbar = (props) => {
    const { searchData, allData, btnData, searchBTN } = props;
    return (
        <>
            <div className="container d-flex justify-content-center margin">
                <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-cls">
                    <div className="d-flex">
                        <input
                            className="search-bar me-2"
                            type="text"
                            placeholder="Enter words"
                            value={searchData}
                            onChange={allData} />
                        <button
                            className="btn btnALL"
                            type="submit"
                            onClick={() => { searchBTN(searchData) }}>Search
                        </button>
                    </div>
                </nav>
            </div>
            <Card />
        </>
    );
};
export default Navbar;