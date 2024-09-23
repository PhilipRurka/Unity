'use client';

import { Button } from '@unity/components';

type ToolsProps = {};

const Tools = ({}: ToolsProps) => {
  console.log('');
  return (
    <div data-component="Tools">
      <h1 className="my-9 text-4xl">Internal Tools</h1>
      <h2 className="my-9 text-2xl">Algolia</h2>
      <Button color="green" size="small">
        Update Algolia
      </Button>
    </div>
  );
};

export default Tools;
