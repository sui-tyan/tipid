export async function newTransaction(
  previousState: string | null,
  formData: FormData
): Promise<string> {
  console.log(Object.fromEntries(formData.entries()));
  
  // POST data
  // await response
  // display result
  await new Promise(resolve => setTimeout(resolve, 10000));
  return "success"
}
