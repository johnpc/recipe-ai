import { amplifyClient } from "./amplify-utils";

export async function generateRecipe(formData: FormData) {
  const ingredients = (formData.get("ingredients") as string)?.split(',').map(ingredient => ingredient.trim()) ?? [];
  console.log({ingredients});
  const response = await amplifyClient.queries.askBedrock({
    ingredients,
  });

  console.log({response});
  const res = JSON.parse(response.data?.body!);
  const content = res.content[0].text;
  return content || "";
}
