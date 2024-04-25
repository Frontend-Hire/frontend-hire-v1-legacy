'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import AutoScroll from 'embla-carousel-auto-scroll';
import ProjectItem from './ProjectItem';
import { ProjectOverview } from '@/types/Project';

type ProjectsCarouselProps = {
  projects: ProjectOverview[];
};

export default function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <Carousel
      opts={{ loop: true }}
      orientation="horizontal"
      plugins={[
        AutoScroll({
          speed: 0.8,
          stopOnMouseEnter: true,
          stopOnInteraction: false,
        }),
      ]}
    >
      <CarouselContent className="h-[250px]">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="sm:basis-[60%]">
            <ProjectItem {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
