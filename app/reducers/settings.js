import { createAction } from 'redux-actions';

export const TOGGLE_WORK_DETAIL_MODE = 'cv/settings/toggle-work-detail-mode';

export default (state = {
    workDetails: false
}, action) => {
    switch (action.type) {
    case TOGGLE_WORK_DETAIL_MODE:
        return {
            ...state,
            workDetails: !state.workDetails
        };
    default:
        return state;
    }
};

export const toggleWorkDetailMode = createAction(TOGGLE_WORK_DETAIL_MODE);
