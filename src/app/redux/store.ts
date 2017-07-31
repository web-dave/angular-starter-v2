// store.ts
export interface IAppState {
  formdirty: boolean;
}

export const appState: IAppState = {
  formdirty: false
}

export const FORM_DIRTY = { type: 'FORM_DIRTY' }
export const FORM_PRISTINE = { type: 'FORM_PRISTINE' }

export function rootReducer(state: IAppState, action): IAppState {

  switch (action) {
    case FORM_DIRTY:
      return { formdirty: true };
    case FORM_PRISTINE:
      return { formdirty: false };
  }
  return state;
}
