// Define a TypeScript interface for country data
interface CountryData {
    name: string;
    capital: string;
    population: number;
}

// Define an interface for the props the component will receive
interface CountryDetailProps {
    countryData?: CountryData;
    url: string;
}

export default function CountryDetail(data: CountryDetailProps){
    return(
        <div>
         <div>   
         {data.countryData ? (
                    <>
                    &nbsp;<u><b><h1 className="flex justify-center">COUNTRY DETAILS</h1></b></u>
                    <h2 className="flex justify-center">Country Name : {data.countryData.name}</h2>
                    <h2 className="flex justify-center">Country Capital : {data.countryData.capital}</h2>
                    <h2 className="flex justify-center">Country Population : {data.countryData.population}</h2>
                    </>
                ) : (
                    <h1 className="flex justify-center">{data.url} not found</h1>
                )
            }
            </div>
        </div>
    );
}