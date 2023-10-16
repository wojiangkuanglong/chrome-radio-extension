import * as React from 'react';

import { M3uParser } from 'm3u-parser-generator';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import radioM3u from '@/config/radio';
import '@/style.css';

import M3uRadio from './M3uRadio';

function TabPage() {
  const playlist = React.useMemo(() => M3uParser.parse(radioM3u), []);

  const groups = React.useMemo(
    () => [...new Set(playlist.medias.map((item) => item.attributes['group-title']))],
    [playlist.medias],
  );
  console.log(666, playlist.medias, groups);
  return (
    <div className="p-4">
      <Tabs defaultValue="TV">
        <TabsList>
          <TabsTrigger value="TV">
            📺<span className="ml-2">电视</span>
          </TabsTrigger>
          <TabsTrigger value="Radio">
            📢<span className="ml-2">广播</span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="TV">1</TabsContent>
        <TabsContent value="Radio">
          <div className="relative">
            <div className="flex space-x-4 pb-4">
              {groups.map((item) => (
                <M3uRadio
                  key={item}
                  title={item}
                  list={playlist.medias.filter((v) => v.attributes['group-title'] === item)}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default TabPage;
