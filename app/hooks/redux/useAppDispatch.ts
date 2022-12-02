import { useDispatch } from "react-redux";
import { store } from "../../redux";

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
