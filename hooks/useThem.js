
import { useContext } from 'react';
import MyContext from "../context/api"

export default function useThem(){
    return useContext(MyContext)
}