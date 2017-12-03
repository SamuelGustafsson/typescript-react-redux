import { reducer as newsReducer } from "./news/news-reducer";
import * as news from "./news/news-state";
import { Action as NewsAction } from "./news/news-action";

export interface State {
  readonly news: news.State;
}

export const initialState: State = {
  news: news.initialState
};

export const reducer = (state: State, action: NewsAction): State => ({
  news: newsReducer(state.news, action as NewsAction)
});
