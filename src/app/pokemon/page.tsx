/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import styles from './pokemon.module.css';

interface PokemonList {
  count: number;
  next: string;
  previous?: any;
  results: Pokemon[];
}

interface Pokemon {
  name: string;
  url: string;
}

export default function Page() {
  const [pokemonData, setPokemonData] = useState<PokemonList>({ results: [], count: 0, next: "" });

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30");
        const data = await result.json();
        setPokemonData(data as PokemonList);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  const loadMorePokemons = async () => {
    try {
      const result = await fetch(pokemonData.next || "https://pokeapi.co/api/v2/pokemon?limit=30");
      const data = await result.json();
      setPokemonData(prev => ({
        ...data,
        results: [...prev.results, ...data.results]
      }));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.container}>
      <header>
        <h1 className={styles.title}>Pokedex Lab</h1>
      </header>
      <div className={styles.cardContainer}>
        {pokemonData.results.map(p => {
          const id = p.url.split('/').filter(Boolean).pop();
          const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return (
            <div key={p.name} className={styles.card}>
              <Link href={`/pokemon/${p.name}`} className="text-decoration-none">
                <div className={styles.cardImageContainer}>
                  <img className={styles.cardImgTop} src={imageUrl} alt={p.name} />
                </div>
                <div className={styles.cardContent}>
                  <div className={styles.cardId}>#{id}</div>
                  <div className={styles.cardName}>{p.name}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.loadMorePoke}>
        <button onClick={loadMorePokemons} className={styles.btn}>Load More</button>
      </div>
    </div>
  );
}
