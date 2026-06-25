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

export async function createMachine(machine) {
  const { data, error } = await supabase
    .from("machines")
    .insert(machine)
    .select()
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getAllMachines() {
  const { data, error } = await supabase
    .from("machines")
    .select(`
      *,
      machine_specs (
        id
      ),
      machine_images (
        id,
        machine_id,
        image_url,
        alt_text,
        display_order
      )
    `)
    .order("created_at", { ascending: false });

  if (error) throw error;

  console.log("getAllMachines data:", data);

  return data;
}

export async function deleteMachine(machineId) {
  const { error } = await supabase
    .from("machines")
    .delete()
    .eq("id", machineId);

  if (error) {
    throw error;
  }
}

export async function createMachineSpecs(machineId, specs) {
  const specsToInsert = specs
    .filter((spec) => spec.label.trim() !== "" && spec.value.trim() !== "")
    .map((spec, index) => ({
      machine_id: machineId,
      label: spec.label,
      value: spec.value,
      display_order: index + 1,
    }));

  if (specsToInsert.length === 0) return;

  const { error } = await supabase
    .from("machine_specs")
    .insert(specsToInsert);

  if (error) {
    throw error;
  }
}

export async function createMachineImages(machineId, imageUrls) {
  const imagesToInsert = imageUrls.map((imageUrl, index) => ({
    machine_id: machineId,
    image_url: imageUrl,
    alt_text: null,
    display_order: index + 1,
  }));

  if (imagesToInsert.length === 0) return;

  const { error } = await supabase
    .from("machine_images")
    .insert(imagesToInsert);

  if (error) throw error;
}

export async function getMachine(machineId) {
  const { data, error } = await supabase
    .from("machines")
    .select(`
      *,
      machine_specs (
        id,
        label,
        value,
        display_order
      ),
      machine_images (
        id,
        image_url,
        alt_text,
        display_order
      )
    `)
    .eq("id", machineId)
    .single();

  if (error) throw error;

  return data;
}

export async function deleteMachineImage(imageId) {
  const { error } = await supabase
    .from("machine_images")
    .delete()
    .eq("id", imageId);

  if (error) throw error;
}

export async function updateMachine(machineId, machine) {
  const { data, error } = await supabase
    .from("machines")
    .update({
      title: machine.title,
      description: machine.description,
      price: machine.price,
      category: machine.category,
      status: machine.status,
      updated_at: new Date().toISOString(),
    })
    .eq("id", machineId)
    .select()
    .single();

  if (error) throw error;

  return data;
}

export async function replaceMachineSpecs(machineId, specs) {
  const { error: deleteError } = await supabase
    .from("machine_specs")
    .delete()
    .eq("machine_id", machineId);

  if (deleteError) throw deleteError;

  await createMachineSpecs(machineId, specs);
}