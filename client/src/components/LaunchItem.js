/* eslint-disable camelcase */

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

const LaunchItem = ({ launch: { flight_number, mission_name, launch_date_local, launch_success } }) => (
  <div className="card card-body mb-3">
    <div className="row">
      <div className="col-md-9">
        <h4>
          Mission:{' '}
          <span
            className={classNames({
              'text-success': launch_success,
              'text-danger': !launch_success,
            })}
          >
            {mission_name}
          </span>
        </h4>
        <p>
          Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
        </p>
      </div>
      <div className="col-md-3">
        <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
          Launch Details
        </Link>
      </div>
    </div>
  </div>
);

LaunchItem.propTypes = {
  launch: PropTypes.shape({
    flight_number: PropTypes.number.isRequired,
    mission_name: PropTypes.string.isRequired,
    launch_date_local: PropTypes.string.isRequired,
    launch_success: PropTypes.bool.isRequired,
  }).isRequired,
};

export default LaunchItem;
