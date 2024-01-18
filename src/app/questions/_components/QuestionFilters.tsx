'use client';

import { useQueryState } from 'nuqs';
import { ListFilterIcon, SearchIcon } from 'lucide-react';

import VisuallyHidden from '../../../components/ui/visually-hidden';
import InputWithIcon from '@/components/InputWithIcon';

export default function QuestionFilters() {
  const [search, setSearch] = useQueryState('search');

  return (
    <div className="flex flex-wrap items-center gap-[10px]">
      <div>
        <ListFilterIcon />
        <VisuallyHidden>Filters</VisuallyHidden>
      </div>
      <div>
        <VisuallyHidden>
          <label htmlFor="search">Search</label>
        </VisuallyHidden>
        <InputWithIcon
          icon={<SearchIcon />}
          id="search"
          defaultValue={search || ''}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Questions..."
        />
      </div>
    </div>
  );
}
