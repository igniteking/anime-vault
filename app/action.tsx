"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";
import { data } from "./_data";

export const fetchAnmime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?limit=8&order=popularity&page=${page}`
  );
  const data = await response.json();
  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};
