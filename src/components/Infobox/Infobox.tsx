import { InfoboxType } from '@/Types/contentful-codegen/SimplerContentfulTypes';

type InfoboxProps = {
  infobox: InfoboxType;
};

const Infobox = ({ infobox }: InfoboxProps) => {
  const { blocks } = infobox.fields;

  return (
    <div className="float-right ml-8 w-64 rounded-lg bg-white bg-opacity-30 p-5" data-component="cInfobox">
      {blocks.map((block) => (
        <div key={`infobox-block-${block?.fields.title}`}>
          <span className="mb-2 font-lexend text-2xl font-medium">{block?.fields.title}</span>
          {block?.fields.items.map((item) => (
            <div key={`infobox-${block?.fields.title}-${item?.fields.title}`} className="mb-3 last:m-0">
              <span className="text-md font-normal">{item?.fields.title}</span>
              <span className="text-sm">{item?.fields.description}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Infobox;
