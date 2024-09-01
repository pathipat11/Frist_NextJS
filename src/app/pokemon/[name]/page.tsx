/* eslint-disable @next/next/no-img-element */
"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from './details.module.css';

const typeColors: Record<string, string> = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  electric: "#F8D030",
  grass: "#78C850",
  ice: "#98D8D8",
  fighting: "#C03028",
  poison: "#A040A0",
  ground: "#E0C068",
  flying: "#A890F0",
  psychic: "#F85888",
  bug: "#A8B820",
  rock: "#B8A038",
  ghost: "#705898",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
  fairy: "#EE99AC",
};

interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

interface PokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  stats: Stat[];
  abilities: { ability: { name: string } }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
    };
  };
}

export default function Page() {
  const { name } = useParams<{ name: string }>();
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await result.json();
        setPokemon(data as PokemonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonData();
  }, [name]);

  if (!pokemon) return <p>Loading...</p>;

  const { id, name: pokemonName, height, weight, types, stats, abilities, sprites } = pokemon;
  const mainType = types[0].type.name;
  const color = typeColors[mainType];

  return (
    <div className={styles.container} style={{ backgroundColor: color }}>
      <h1 className={styles.title}>Pokedex Lab</h1>
      <button onClick={() => window.history.back()} className={styles.backButton}>
        &lt;
      </button>
      <div className={styles.mainDetails}>
        <div id="pokemon-details" className="row mt-5">
          <div className="col-12 text-center position-relative">
            <img src={sprites.other['official-artwork'].front_default} alt={pokemonName} className={styles.pokemonImage} />
            <h2>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h2>
            <div className={styles.idTag}>#{id}</div>
            <div className={styles.types}>
              {types.map(typeInfo => (
                <a href={`/type/${typeInfo.type.name}`} key={typeInfo.type.name} className="badge text-decoration-none" style={{ backgroundColor: typeColors[typeInfo.type.name] }}>
                  {typeInfo.type.name}
                </a>
              ))}
            </div>
            <div className={styles.detailsContainer}>
              <div className={styles.hei}>
                {height / 10} m
                <p>Height</p>
              </div>
              <div className={styles.wei}>
                {weight / 10} kg
                <p>Weight</p>
              </div>
              <div className={styles.abilities}>
                {abilities.map(abilityInfo => (
                  <a href={`/ability/${abilityInfo.ability.name}`} key={abilityInfo.ability.name} className="badge bg-primary text-decoration-none">
                    {abilityInfo.ability.name}
                  </a>
                ))}
                <p>Abilities</p>
              </div>
            </div>
            <div><strong>Base Stats</strong></div>
            <div className={styles.statsContainer}>
              {stats.map(statInfo => {
                const statName = statInfo.stat.name.replace("-", " ");
                const statValue = statInfo.base_stat;
                const statPercentage = Math.min(statValue / 200 * 100, 100);
                return (
                  <div className={styles.statItem} key={statInfo.stat.name}>
                    <div className={styles.statLabel}>{statName}</div>
                    <div className={styles.statBar}>
                      <div className={styles.statBarFill} style={{ width: `${statPercentage}%` }}></div>
                    </div>
                    <div className={styles.statValue}>{statValue}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
