import { testAction } from "@/actions/testActions";

export default async function Home() {
  const data = await testAction();
  console.log(data);

  return <div>ii</div>;
}
