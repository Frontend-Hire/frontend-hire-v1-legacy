'use client';

import { ListFilterIcon, SearchIcon } from 'lucide-react';

import VisuallyHidden from '../../../components/ui/visually-hidden';
import InputWithIcon from '@/components/InputWithIcon';

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
        <InputWithIcon
          icon={<SearchIcon />}
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search Questions..."
        />
      </div>
    </div>
  );
}
