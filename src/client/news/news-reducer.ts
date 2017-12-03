import { State } from "./news-state";
import { Action } from "./news-action";

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "news / Load news request":
      return { ...state, news: action.payload };

    default:
      return state;
  }
};
