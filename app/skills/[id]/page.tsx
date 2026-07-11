"use client";
import { useEffect, useState } from "react";
import { Skill, SKILLS } from "../SKILLS";
import { useParams } from "next/navigation";

export default function DetailPage() {
  const param = useParams<{ id: string }>();
  const [skill, setSkill] = useState<Skill | null>(null);
  console.log("rendering skill", param.id);

  useEffect(() => {
    const skill = SKILLS.find((skill) => skill.id === param.id);
    if (skill) {
      setSkill(skill); // cascading render
    }
  }, [param.id]);

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

// export default async function DetailPage({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const { id } = await params;
//   const skill = SKILLS.find((skill) => skill.id == id);
//   //   console.log("this is skill detail page.")

//   return skill ? (
//     <article>
//       <h1>{skill?.name}</h1>
//       <p>{skill?.category}</p>
//       <p>{skill?.description}</p>
//       <p>{skill?.createdAt}</p>
//       <p>{skill?.updatedAt}</p>
//     </article>
//   ) : (
//     <div>Not found</div>
//   );
// }
