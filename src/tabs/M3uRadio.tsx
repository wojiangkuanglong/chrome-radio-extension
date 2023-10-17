import { type M3uMedia } from 'm3u-parser-generator';

import { ScrollArea } from '@/components/ui/scroll-area';

type Props = {
  title?: string;
  list?: M3uMedia[];

  onClick?: (url: string) => void;
};

const M3uRadio = (props: Props) => {
  const { title, list, onClick } = props;
  return (
    <div className="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{title}</h5>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
          <ScrollArea className="h-[500px]">
            {list?.map((item) => {
              return (
                <li
                  key={item.name}
                  className="py-3 sm:py-4 cursor-pointer hover:bg-slate-50"
                  onClick={() => {
                    onClick?.(item.location);
                  }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={item.attributes['tvg-logo']}
                        alt={item.name}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {item.name}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ScrollArea>
        </ul>
      </div>
    </div>
  );
};

export default M3uRadio;
