import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useTurnsStore } from "../store/useTurnsStore";

export function useRealtimeTurns() {
  const setTurns = useTurnsStore((state) => state.setTurns);

  useEffect(() => {
    async function loadTurns() {
      const { data } = await supabase
        .from("turns")
        .select("*")
        .order("created_at", { ascending: false });

      if (data) {
        setTurns(data);
      }
    }

    loadTurns();

    const channel = supabase
      .channel("turns-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "turns",
        },
        () => {
          loadTurns();
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [setTurns]);
}
