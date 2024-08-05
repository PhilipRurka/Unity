'use client';

import { Button } from '@unity/components';

type UsersFilterProps = {
  usersLength: number;
};

const UsersFilter = ({ usersLength }: UsersFilterProps) => {
  console.log('');

  return (
    <div data-component="UsersFilter" className="flex justify-between">
      <div className="flex gap-2 text-2xl">
        <p>Users</p>
        <span>{usersLength}</span>
      </div>
      <div className="flex gap-2">
        {/* <SearchInput /> */}
        <Button size="small" color="black" isFull={false} icon="filter" iconPosition="left">
          Filter
        </Button>
        <Button size="small" color="black" isFull iconPosition="left" icon="plus">
          Add User
        </Button>
      </div>
    </div>
  );
};

export default UsersFilter;
