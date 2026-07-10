import Link from "next/link";
import { SKILLS } from "./SKILLS";

export default function SkillsPage() {
  const skills = SKILLS;
//   console.log("This is skills page.");
  return (
    <div>
      <h1>Skills</h1>

      <p>
        {skills.map((skill) => (
          <li key={skill.id}>
            <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
          </li>
        ))}
      </p>
    </div>
  );
}
