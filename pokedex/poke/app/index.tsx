import { useEffect, useState } from "react";
import { Text, View, ScrollView } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}
export default function Index() {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetchPokemon();
  }, []);

  async function fetchPokemon()  {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=25");
      const data = await response.json();
      setPokemon(data.results);
    } catch (e) {
      console.log(e);
    }
    // Fetch pokemon data from an API
  }

  return (
    <ScrollView>
      {pokemon.map((poke) => (
        <View key={poke.name} style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
          <Text style={{ fontSize: 18 }}>{poke.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
