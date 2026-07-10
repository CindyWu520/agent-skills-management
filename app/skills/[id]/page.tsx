import { SKILLS } from "../SKILLS";

export default async function DetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const skill = SKILLS.find((skill) => skill.id == id);
//   console.log("this is skill detail page.")
  return skill ? (
    <article>
      <h1>{skill?.name}</h1>
      <p>{skill?.category}</p>
      <p>{skill?.description}</p>
      <p>{skill?.createdAt}</p>
      <p>{skill?.updatedAt}</p>
    </article>
  ) : (
    <div>Not found</div>
  );
}
