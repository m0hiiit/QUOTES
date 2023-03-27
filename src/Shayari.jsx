import { useEffect, useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const option = {
    method: "GET",
    headers: {
        'X-Api-Key': '0wULvt3HBCTf2p2xTmZB5Q==Cc8pVw0xbR7rjiLY'
    },
    contentType: 'application/json',
};
const Shayari = () => {
    const [searchData, getSearchData] = useState('')
    const [btnData, getBtnData] = useState(searchData)
    const [data, getData] = useState()

    //fetch api and useEffect start
    const apiFunc = async () => {
        const getApi = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${btnData}`, option);
        const finalGetApi = await getApi.json();
        getData(finalGetApi);
    }
    useEffect(() => {
        (async () => {
            await apiFunc()
        })()
    }, [btnData]);

    //change value in input
    const allData = (e) => {
        getSearchData(e.target.value)
    }

    //push value in input
    const searchBTN = (searchDataValue) => {
        getBtnData(searchDataValue)
        getSearchData('')
    }

    return (
        <>
            <Navbar
                searchData={searchData}
                allData={allData}
                btnData={btnData}
                searchBTN={searchBTN}
            />
            <Card data={data} />
        </>
    )
}
export default Shayari;
