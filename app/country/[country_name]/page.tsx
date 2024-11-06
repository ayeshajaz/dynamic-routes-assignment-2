import Link from "next/link";
import Country from "@/components/Country";
export default function CountryName({params}:{params:{country_name:string}}){

    const countries:{
        name: string
        capital: string
        population: number
    }[]=[{
        name: "Pakistan",
        capital: "Islamabad",
        population: 241495112
        },
       {
        name: "India",
        capital: "Delhi",
        population: 1450935791 
        },
       {
        name: "China",
        capital: "Beijing",
        population: 1419321278 
        },
       {
        name: "Russia",
        capital: "Moscow",
        population: 144820423 
        },
       {
        name: "Egypt",
        capital: "Cairo",
        population: 116538258 
       }     
        ];


        function findCountry(country_url:string){
            return countries.find(country=> country.name.toLowerCase() == country_url.toLowerCase());
        }  
        const result=  findCountry(params.country_name);
    
         
    return(
        <div>
            <Country countryData = {result} url ={params.country_name}/>
             <div>
                {/* button */}
                <li className="flex justify-center">
                <Link className="" href="/"><u><b>Back</b></u></Link>
                </li>
            </div>
        </div>
    )
 }