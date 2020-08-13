import React ,{useEffect,useState} from 'react';
import Recipies from './Recipies'

const App = () => {

    const API_KEY = 'c23fc3546139daf148326e75b93dc93d';
    const API_ID='c29a7bfc';
    const [data,setData] =useState([]);
    const [search,setSearch] =useState("");
    const [query,setQuery] = useState("chicken");

    
    const updateSearch = () => {
        setQuery(search)
    }

    useEffect(() => {
        getData();
    }, [query])

    const getData = () => {
        fetch(`https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`).then(res => res.json())
        .then(data => {
            console.log(data.hits)
            setData(data.hits)
        })
        .catch(err => console.log(err))
    }

    return(
        <>
            <div className="App" style={{backgroundColor:"grey",height:"1500px"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Recipies</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0"
                    onSubmit={(e) => {
                        e.preventDefault()
                        updateSearch();

                    }}
                    
                    >
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" 
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value.toLocaleLowerCase())
                            }}
                        />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
                        >Search</button>
                    </form>
                </div>
            </nav>
            <div
                style={{display: 'flex',justifyContent: 'space-around',alignItems: 'center',height:"1080px",flexWrap:"wrap"}}
            >
                
                {
                    data.map((item,index) => {
                        return(
                            <Recipies
                               
                                key={index}
                                title = {item.recipe.label}
                                photo = {item.recipe.image}
                                ingredient = {item.recipe.ingredientLines}

                            />
                        )
                    })
                }
                </div>
            </div>
           
        </>
    )
}

export default App;