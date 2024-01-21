import { useEffect } from "react";
import { fetchPokemon } from "./fetch";

export default function Mount () {

    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
      
        let pokemonOne = fetchPokemon(7);
        let pokemonTwo = fetchPokemon(8);
        let pokemonThree = fetchPokemon(99);

        return () => {
            // Cancel the request when the component unmounts
            controller.abort();
          };

    },[])

    return (
        <>
        </>
    )
}