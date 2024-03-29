import { HorizontalDivider, Link, SectionTitle } from "@/components/atoms";
import { ProjectCardItem } from "@/components/molecules";
import { Project } from "@/types/projects";
import { HiArrowNarrowRight } from "react-icons/hi";

type HighlightedProjectsProps = {
  projects: Project[]
}

export default function HighlightedProjectsSection({ projects }: HighlightedProjectsProps) {
  return (
    <section className="container py-16">
      <SectionTitle title="Projetos em destaque" subtitle="destaques" />
      <HorizontalDivider className="mb-16" />

      <div>
        {
          projects?.map(project => (
            <div key={project.slug}>
              <ProjectCardItem project={project}/>
              <HorizontalDivider className="my-16" />

            </div>
          ))
        }

        <p className="flex items-center gap-1.5">
          <span className="text-gray-400">Se interessou?</span>
          <Link href="" className="inline-flex">
            Ver todos <HiArrowNarrowRight />
          </Link>
        </p>
      </div>
    </section>
  );
}
