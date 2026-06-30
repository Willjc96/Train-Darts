import { useEffect } from "react";
import { supabase } from "../lib/supabase";
import { useTurnsStore } from "../store/useTurnsStore";

export function useRealtimeTurns() {
  const setTurns = useTurnsStore((state) => state.setTurns);
  const setTotalScored = useTurnsStore((state) => state.setTotalScored);

  useEffect(() => {
    async function loadData() {
      const { data: turns } = await supabase
        .from("turns")
        .select("*")
        .order("created_at", { ascending: false })
        .range(0, 20);

      const { data: total, error: totalError } =
        await supabase.rpc("get_total_scored");

      if (totalError) {
        console.error(totalError);
        return;
      }

      setTotalScored(Number(total || 0));
      console.log("RPC total:", total);
      setTurns(turns || []);
      console.log("RPC total:", total);
    }

    loadData();

    const channel = supabase
      .channel("turns-channel")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "turns",
        },
        loadData,
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [setTurns, setTotalScored]);
}
