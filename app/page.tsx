import Header from '@/components/Header';
import DownloadSection from '@/components/DownloadSection';
import CoreTechSection from '@/components/CoreTechSection';
import JoinGuide from '@/components/JoinGuide';

export default function Home() {
  return (
    <main>
      <div id="home">
        <Header />
      </div>
      <div id="download">
        <DownloadSection />
      </div>
      <CoreTechSection />
      <JoinGuide />
    </main>
  );
}

