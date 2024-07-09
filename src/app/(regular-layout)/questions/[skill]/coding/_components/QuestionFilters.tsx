'use client';

import { useQueryState } from 'nuqs';
import { ListFilterIcon, SearchIcon } from 'lucide-react';

import VisuallyHidden from '@/components/ui/visually-hidden';
import InputWithIcon from '@/components/InputWithIcon';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function QuestionFilters() {
  const [search, setSearch] = useQueryState('search');
  const [sort, setSort] = useQueryState('sort');

  return (
    <div className="grid grid-cols-1 items-center justify-between gap-2 rounded-sm bg-card px-4 py-2 sm:flex">
      <div className="flex items-center gap-2">
        <ListFilterIcon />
        <VisuallyHidden>Filters</VisuallyHidden>
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
      <div>
        <Select defaultValue={sort || ''} onValueChange={setSort}>
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy-to-hard">Easy to Hard</SelectItem>
            <SelectItem value="hard-to-easy">Hard to Easy</SelectItem>
            <SelectItem value="new-first">Newest First</SelectItem>
            <SelectItem value="old-first">Oldest First</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
