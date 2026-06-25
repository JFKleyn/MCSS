import { supabase } from "./supabase";

export async function uploadMachineImage(file, machineId) {
  const fileExt = file.name.split(".").pop();
  const fileName = `${machineId}-${Date.now()}.${fileExt}`;
  const filePath = `${machineId}/${fileName}`;

  const { error } = await supabase.storage
    .from("machine-images")
    .upload(filePath, file);

  if (error) {
    throw error;
  }

  const { data } = supabase.storage
    .from("machine-images")
    .getPublicUrl(filePath);

  return data.publicUrl;
}