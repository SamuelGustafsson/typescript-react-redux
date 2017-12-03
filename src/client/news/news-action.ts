import { Action } from "../Action";

export type Action = LoadNewsRequestAction;

type LoadNewsRequestAction = Action<"news / Load news request", {}, false>;

export const loadProductsRequest = (): LoadNewsRequestAction => ({
  type: "news / Load news request",
  payload: {},
  error: false
});
