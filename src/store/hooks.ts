import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./store";

export const useAppDispatch: typeof useDispatch =
  useDispatch.withTypes<AppDispatch>();
export const useAppSelector: typeof useSelector =
  useSelector.withTypes<RootState>();
