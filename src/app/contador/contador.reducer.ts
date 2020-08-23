import { Action, createReducer, on } from '@ngrx/store';
import {
  incrementar,
  decrementar,
  multiplicar,
  dividir,
  reset,
} from './contador.actions';

// export function contadorReducer(state: number = 10, action: Action) {
//   switch (action.type) {
//     case incrementar.type:
//       return state + 1;
//     case decrementar.type:
//       return state - 1;

//     default:
//       return state;
//   }
// }

export const initialState = 20;

const _contadorReducer = createReducer(
  initialState,
  on(incrementar, (state) => state + 1),
  on(decrementar, (state) => state - 1),
  on(multiplicar, (state, { number }) => state * number),
  on(dividir, (state, { number }) => state / number),
  on(reset, (state) => 0)
);

export function contadorReducer(state, action) {
  return _contadorReducer(state, action);
}
