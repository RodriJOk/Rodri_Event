/* import React, {Fragment} from 'react';
import './styles/BadgesList.css'

class BadgesList extends React.Component {
    state = { 
        loading: true,
        error: null,
        data:{
            results:[],
        },
        proximaPagina:1
    }

    componentDidMount(){
        this.llamadaApi()
    }

    llamadaApi = async () =>{
        this.setState({loading: true, error:null})
        
        try{
            const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.proximaPagina}`)
            const data = await response.json()
            console.log(data)
            this.setState({
                loading: false,
                data: {
                    info: data.info,
                    results: [].concat(this.state.data.results, data.results),
                },
                proximaPagina: this.state.proximaPagina+1
            })
        } catch(error){
            this.setState({
                loading : false,
                error : error,
            })
        }
    }

    render() { 
        if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }
        return ( 
            <Fragment>
                <ul>
                    {this.state.data.results.map ((results)=>{
                        return(
                                <li key={results.id} className="List">
                                    <div className="List__container--image">
                                        <img src={results.image}/>
                                    </div>
                                    <div className="List__container--info">
                                        <h2>{results.name}</h2>
                                        <p><i>Estado: </i> <strong>{results.status}</strong></p>
                                        <p><i>Especie: </i> {results.species}</p>
                                        <p><i>Ubicacion: </i> {results.location.name}</p>
                                    </div>
                                </li>  
                            )
                        })
                    }
                </ul>
                {/* {!this.state.loading && (
                    <div style={{backgroundColor:'green', color: "white"}}>
                        <button onClick={()=> this.llamadaApi()}>Cargar mas</button>
                    </div>
                )} *//*}
            </Fragment>
         );
    }
}
 
export default BadgesList; */

/* import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './styles/BadgesList.css';
import BadgesListItem from './BadgeListItem';

function BadgesList (props){
    console.log(props)
    const rodri = props.badges;
    console.log(rodri.badges.id)
    const [query, setQuery] = useState("")
    const filteredBadges = rodri.filter(badge =>{
      return(
        badge.firstName.includes(query),
        console.log(badge.lastName.includes(query))
        )
    })

    if (filteredBadges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <div className="BadgesList">
        <div className="form-group">
          <label>Filter Badges</label>
          <input 
            type="text" 
            className="form-control"
            value={query}
            onChange={(e)=>{
              setQuery(e.target.value)
            }}
            />
        </div>
        <ul className="list-unstyled">
          {filteredBadges.map(badge => {
            return (
              <li key={badge.id}>
                <Link style={{textDecoration:'none', color:'black'}} to={`/badges/${badge.id}`}>
                  <BadgesListItem badge={badge} />
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  
}

export default BadgesList; */

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/BadgesList.css';
import Gravatar from './Gravatar';

class BadgesListItem extends React.Component {
  render() {
    return (
      <div className="BadgesListItem">
        <div className>
          <Gravatar
            className="BadgesListItem__avatar"
            email={this.props.badge.email}
          />
        </div>

        <div className="BadgesListItem__info">
          <p className="BadgesListItem__info-name">
            <strong>
              {this.props.badge.lastName}, {this.props.badge.firstName} 
            </strong>
          </p>
          <p><strong>Profesion:</strong> {this.props.badge.jobTitle}</p>
          <p><strong>Twitter:</strong> @{this.props.badge.twitter}</p>
        </div>
      </div>
    );
  }
}

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState('');
  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
        </div>

        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div className="BadgesList">
      <div className="BadgeList__search">
        <label className="BadgeList__search-title">Buscar asistente</label>
        <input
          type="text"
          className="BadgeList__search-input"
          value={query}
          onChange={e => {
            setQuery(e.target.value);
          }}
        />
      </div>

      <ul style={{textDecoration: "none", listStyle: "none"}}>
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                style={{textDecoration:"none", color:"black"}}
                to={`/badges/${badge.id}`}
              >
                <BadgesListItem badge={badge} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BadgesList;