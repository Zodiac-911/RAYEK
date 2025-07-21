import { useContext } from "react";
import { PocketBaseContext } from "../context/PocketBaseContext";

const usePocketBase = () => useContext(PocketBaseContext);

export default usePocketBase;
