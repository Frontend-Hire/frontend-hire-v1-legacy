'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { ListFilterIcon, SearchIcon } from 'lucide-react';

import VisuallyHidden from '../../../components/ui/visually-hidden';
import InputWithIcon from '@/components/InputWithIcon';

export default function QuestionFilters() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('search', value);
    } else {
      params.delete('search');
    }
    replace(`${pathname}?${params.toString()}`);
  };

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
          defaultValue={searchParams.get('search')?.toString()}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search Questions..."
        />
      </div>
    </div>
  );
}
