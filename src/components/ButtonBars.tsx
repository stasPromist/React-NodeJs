import { useState } from "react";
import CardsList, { ICardData } from "../pages/CardsList";

enum SortDirection {
    asc = 'asc',
    desc = 'desc'
}
const data:any =[];
function ButtonBars() {
    const [offers,setOffers] = useState<Array<ICardData>>([]);

    const [sort,setSort] = useState<SortDirection>(SortDirection.asc);
    const [search,setSearch] = useState<string>('');

    function handleSort(value: string) {
        const direction = value as SortDirection;
        setSort(direction)

        let result = [...data];
        if(direction === SortDirection.desc) {
              result.sort((a,b) => 
                   a.location > b.location ? -1 :
                    a.location < b.location ? 1 :
                    0
              );
        }
       else {
          result.sort((a,b) => 
          a.location < b.location ? -1 :
           a.location > b.location ? 1 :
           0
          );
       }
       setOffers(result);
  }

  function handleSearch(value: string) {
    setSearch(value);
    const term =value.toLowerCase();
    let result =[...data];

    if(term.length > 0) {
       result = [...data].filter(offer => 
           offer.location.toLowerCase().includes(term))
    }
    setOffers(result);
}

    return ( 
        <>
          <div className="form-outline mt-5">
                <input type="search"
                 value={search}
                 onChange={(e) => handleSearch(e.target.value)}
                    id="form1"
                    className="form-control"
                    placeholder="Enter business name or number"
                    aria-label="Search" />   
                      <select
                    className="form-select"
                    value={sort}
                    onChange={(e) => handleSort(e.target.value)}
                >
                    <option value={SortDirection.asc}>Location A-Z</option>
                    <option value={SortDirection.desc}>Location Z-A</option>
                </select>
                {
                            offers.map((offer:ICardData) =>
                                <tr key={offer._id}>
    
                                  
                                    

                                    
                                </tr>
                                )
                        }
  
            </div>
          
        </>
     );
}

export default ButtonBars;