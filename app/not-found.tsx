import getByContentModel from '@/Fetchers/contentful/getByContentModel';
import { HierarchyLayoutType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

export default async function NotFound() {
  const [hierarchyLayout] = (await getByContentModel('hierarchyLayout')) as HierarchyLayoutType[];

  return (
    <div>
      <h1>404</h1>
      <pre>{JSON.stringify(hierarchyLayout, null, 2)}</pre>
    </div>
  );
}
