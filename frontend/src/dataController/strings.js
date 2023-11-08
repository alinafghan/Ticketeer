import { getCountriesTable } from "../apiFetching/apis";
//getDesertTable


const HomePageTitle = "Ticketeer";

    const TableNames = ["countries"];

    const Table_columns = [
        {
            columns : ["country_name"]
        }
        
    ]

    async function getCountry(){
        let data = await getCountriesTable();
        const countries = data.rows.map((item) => {
            console.log(item)
            return(
                {
                    country_id : item[0],
                    country_name : item[1]
                }
            )
        })
        return countries;
    }

    const MockCountries = [
        {
            country_id : 0,
            country_name : "Frozen yoghurt"
        },
        {
            country_id : 1,
            country_name : "Ice cream sandwich"
        },
        {
            country_id : 2,
            country_name : "Eclair"
        },
        {
            country_id : 3,
            country_name : "Cupcake"
        }   

    ]

export { HomePageTitle ,TableNames, Table_columns, MockCountries, getCountry};