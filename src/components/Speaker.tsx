import Image from "next/image";
import { memo, PropsWithChildren, useContext } from "react";
import SpeakerContextProvider from "../contexts/SpeakerContextProvider";
import { SpeakerFilterContext, SpeakerFilterContextProps } from "../types/contexts";
import { SpeakerData } from "../types/speaker-data";
import ErrorBoundary from "./ErrorBoundary";
import Sessions from "./Sessions";
import SpeakerDelete from "./SpeakerDelete";
import SpeakerImage from "./SpeakerImage";
import SpeakerInfo from "./SpeakerInfo";

type SpeakerProps = {
	deleteSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	insertSpeaker: (callback: () => void, speaker: SpeakerData) => void;
	speakerData: SpeakerData;
	updateSpeaker: (callback: () => void, speaker: SpeakerData) => void;
};

const SpeakerNoErrorBoundary = memo(
  function Speaker({ deleteSpeaker, insertSpeaker, speakerData, updateSpeaker }: SpeakerProps) {
    const { showSessions } = useContext<SpeakerFilterContextProps>(SpeakerFilterContext);

    return (
      <SpeakerContextProvider deleteSpeaker={deleteSpeaker} insertSpeaker={insertSpeaker} speaker={speakerData} updateSpeaker={updateSpeaker}>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
          <div className="card card-height p-4 mt-4">
            <SpeakerImage />
            <SpeakerInfo />
          </div>
          {showSessions ? <Sessions /> : null}
          <SpeakerDelete />
        </div>
      </SpeakerContextProvider>
    );
  }, propsAreEqual);

function propsAreEqual(prevProps: Readonly<PropsWithChildren<SpeakerProps>>, nextProps: Readonly<PropsWithChildren<SpeakerProps>>): boolean {
  return (prevProps.speakerData.favorite === nextProps.speakerData.favorite);
}

function Speaker(props: SpeakerProps) {
  const errorUI: React.ReactNode = (
    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
    <div className="card card-height p-4 mt-4">
      <Image alt="Unknown Speaker" className="contain-fit" height={300} src="/images/speaker-99999.jpg" width={300} />
      There was an error loading this speaker
    </div>
  </div>
  );

  return (
    <ErrorBoundary errorUI={errorUI}>
      <SpeakerNoErrorBoundary {...props}></SpeakerNoErrorBoundary>
    </ErrorBoundary>
  );
}

export default Speaker;
