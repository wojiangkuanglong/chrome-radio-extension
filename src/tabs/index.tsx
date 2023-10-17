import * as React from 'react';
import ReactHlsPlayer from 'react-hls-player';

import { M3uParser } from 'm3u-parser-generator';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import radioM3u from '@/config/radio';
import '@/style.css';

import M3uRadio from './M3uRadio';

function TabPage() {
  const playerRef = React.useRef(null);
  const [url, setUrl] = React.useState('http://live.funhillrm.com/4/sd/live.m3u8');
  const playlist = React.useMemo(() => M3uParser.parse(radioM3u), []);

  const groups = React.useMemo(
    () => [...new Set(playlist.medias.map((item) => item.attributes['group-title']))],
    [playlist.medias],
  );

  return (
    <div className="p-4">
      <Tabs defaultValue="Radio">
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
          <div>
            <div className="flex space-x-4 pb-4">
              {groups.map((item) => (
                <M3uRadio
                  key={item}
                  title={item}
                  list={playlist.medias.filter((v) => v.attributes['group-title'] === item)}
                  onClick={setUrl}
                />
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <ReactHlsPlayer
        className="h-[50px]"
        src={url}
        autoPlay={true}
        playerRef={playerRef}
        controls={true}
        width="100%"
      />
    </div>
  );
}

export default TabPage;
