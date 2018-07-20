import locs from '../../utils/locs'

export default {
    state: {
        list: []
    },
    mutations: {
        SET_PLAYER_LIST: (state, data) => {
            state.list = data
        }
    },
    actions: {}
}
