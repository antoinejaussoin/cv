import React from 'react';
import { connect } from 'react-redux';
import { shouldDisplayWorkDetails } from '../selectors';
import { toggleWorkDetailMode } from '../reducers/settings';
import Switch from 'rc-switch';
import 'rc-switch/assets/index.css';

const stateToProps = state => ({
    enabled: shouldDisplayWorkDetails(state)
});

const actionToProps = dispatch => ({
    onChange: () => dispatch(toggleWorkDetailMode())
});

const WorkDetailsSwitch = ({ enabled, onChange }) => (
    <Switch checked={enabled} onChange={onChange} />
);

export default connect(stateToProps, actionToProps)(WorkDetailsSwitch);
