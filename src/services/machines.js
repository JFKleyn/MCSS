import { supabase } from "./supabase";

export async function getMachines() {
  const { data, error } = await supabase
    .from("machines")
    .select(`
      *,
      machine_specs (
        id,
        label,
        value,
        sort_order
      ),
      machine_images (
        id,
        image_url,
        alt_text,
        sort_order
      )
    `)
    .eq("status", "available")
    .order("created_at", { ascending: false })
    .order("display_order", { foreignTable: "machine_specs", ascending: true })
.order("display_order", { foreignTable: "machine_images", ascending: true })

  if (error) {
    throw error;
  }

  return data;
}