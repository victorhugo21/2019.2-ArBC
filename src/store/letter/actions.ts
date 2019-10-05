import { ActionTree } from 'vuex';
import { LetterState } from './types';
import { RootState } from '../types';
import API from '../../services/api';

export const actions: ActionTree<LetterState, RootState> = {
  getLetter({ commit }): any {
    const url = '/Letter';

    return API.get(url)
      .then((response: any) => {
        commit('setLetters', response);

        return response;
      });
  },
};
