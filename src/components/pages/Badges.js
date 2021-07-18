import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
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
              <h2>Sumate a la lista de personas que asistiran al evento</h2>
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              Registrarme
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