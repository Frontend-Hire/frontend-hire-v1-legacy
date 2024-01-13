'use client';

import { ListFilterIcon, SearchIcon } from 'lucide-react';

import VisuallyHidden from '../../../components/ui/visually-hidden';
import { Input } from '../../../components/ui/input';

type QuestionFiltersProps = {
  search: string;
  onSearch: (search: string) => void;
};

export default function QuestionFilters({
  search,
  onSearch,
}: QuestionFiltersProps) {
  return (
    <div className="flex flex-wrap items-center gap-[10px]">
      <div>
        <ListFilterIcon />
        <VisuallyHidden>Filters</VisuallyHidden>
      </div>
      <div>
        <div className="relative flex items-center">
          <SearchIcon className="absolute left-2 h-4 w-4 text-muted" />
          <Input
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            className="pl-8"
            placeholder="Search questions..."
          />
        </div>
      </div>
    </div>
  );
}
