import { useRef } from "react";

const kSampleRate = 16000;
const kRestartRecording_s = 120;
const kIntervalAudio = 1000; // pass the recorded audio to the C++ instance at this rate

const useRecord = () => {
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const doRecordingRef = useRef(false);

  const contextRef = useRef<AudioContext | null>(null);
  const audioRef = useRef<Float32Array | null>(null);
  const audio0Ref = useRef<Float32Array | null>(null);
  const instanceRef = useRef<number | null>(null);
  const modelWhisperRef = useRef<string | null>(null);
  const nLinesRef = useRef(0);
  const transcribedAllRef = useRef('');
  const chunksRef = useRef<Array<Blob>>([]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream)
        mediaRecorder.ondataavailable = (event) => {
          if (chunksRef.current === null) {
            chunksRef.current = [];
          }
          chunksRef.current.push(event.data);

          console.log('js: audio recorded, size: ' + chunksRef.current.length)

          const blob = new Blob(chunksRef.current, { 'type' : 'audio/ogg; codecs=opus' });
          const reader = new FileReader();

          reader.onload = function(event) {
            console.log('js: audio recorded, size: ' + (reader.result as ArrayBuffer).byteLength);
            const buf = new Uint8Array(reader.result as ArrayBuffer);

            if (!contextRef.current) {
              contextRef.current = new AudioContext();
            }
            contextRef.current.decodeAudioData(buf.buffer, function(audioBuffer) {
              const offlineContext = new OfflineAudioContext(audioBuffer.numberOfChannels, audioBuffer.length, audioBuffer.sampleRate);
              const source = offlineContext.createBufferSource();
              source.buffer = audioBuffer;
              source.connect(offlineContext.destination);
              source.start(0);

              offlineContext.startRendering().then(function(renderedBuffer) {
                audioRef.current = renderedBuffer.getChannelData(0);

                console.log('js: audio recorded, size: ' + audioRef.current.length + ', old size: ' + (audio0Ref.current == null ? 0 : audio0Ref.current.length));

                const audioAll = new Float32Array(audio0Ref.current == null ? audioRef.current?.length : audio0Ref.current?.length + audioRef.current.length);
                if (audio0Ref.current != null) {
                  audioAll.set(audio0Ref.current, 0);
                }
                audioAll.set(audioRef.current, audio0Ref.current == null ? 0 : audio0Ref.current.length);

                // if (instance) {
                //   Module.set_audio(instance, audioAll);
                // }
              });
            }, function(e) {
              console.log("Error with decoding audio data", e)
              audioRef.current = null;
            });
          }

          reader.readAsArrayBuffer(blob);

        };

        mediaRecorder.start(kIntervalAudio);
        const audioContext = new AudioContext()
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(audioContext.destination);
      })
      .catch((err) => {
        console.error('Error accessing microphone:', err)
      })
    // capture the recording

    // generate transcription
  }

  return {
    startRecording,
  }
}

export default useRecord;
