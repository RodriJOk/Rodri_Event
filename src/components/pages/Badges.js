/* import React, {Fragment, Component} from 'react';
import "./styles/Badges.css";
import { Link } from 'react-router-dom';
 
import badge from '../../images/badge-header.svg';
import BadgesList from '../BadgesList';


class Badges extends Component {
    constructor(props){
        super(props)
        console.log("1_ Constructor")
        this.state = {
            loading: true,
            error: null,
            data:[
                {
                  id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                  firstName: "Freda",
                  lastName: "Grady",
                  email: "Leann_Berge@gmail.com",
                  jobTitle: "Legacy Brand Director",
                  twitter: "FredaGrady22221-7573",
                  avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                },
                {
                  id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                  firstName: "Major",
                  lastName: "Rodriguez",
                  email: "Ilene66@hotmail.com",
                  jobTitle: "Human Research Architect",
                  twitter: "ajorRodriguez61545",
                  avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                },
                {
                  id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                  firstName: "Daphney",
                  lastName: "Torphy",
                  email: "Ron61@hotmail.com",
                  jobTitle: "National Markets Officer",
                  twitter: "DaphneyTorphy96105",
                  avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                }
              ]
        }
    }

    componentDidMount(){
        console.log("3_ ComponentDidMount")
    }

    render() {  */
        /* if(this.state.loading === true){
            return(
                <p>Loading ...</p>
            )
        } */
        /* console.log("2_ Render")
        return (
            <Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img 
                                src={badge} 
                                alt="Conf Logo" 
                                className="Badges_conf-logo" 
                                loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link 
                            to="/badges/new" 
                            className="btn btn-primary">
                                New Badge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                                <BadgesList badge={this.state.data}/>
                        </div>
                    </div>
                </div>
            </Fragment> 
         );
    }
}
 
export default Badges; */

import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
/* import confLogo from '../../images/badge-header.svg'; */
import BadgesList from '../../components/BadgesList';
import PageLoading from '../PageLoading';
import PageError from '../PageError';
import api from '../../api';
import MiniLoader from '../MiniLoader';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    this.fetchData();
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillMount(){
    clearInterval(this.intervalId)
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                /* src={confLogo} */
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          {console.log(this.state.data)}
          <BadgesList badges={this.state.data} />
          {this.state.loading && <MiniLoader/>}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;