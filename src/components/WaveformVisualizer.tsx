interface WaveformVisualizerProps {
  isActive: boolean;
}

function WaveformVisualizer({ isActive }: WaveformVisualizerProps) {
  if (!isActive) return null;

  return (
    <div className="waveform-container">
      {[...Array(10)].map((_, i) => (
        <div 
          key={i}
          className="waveform-bar"
          style={{
            height: isActive 
              ? `${8 + Math.random() * 20}px`
              : '8px'
          }}
        />
      ))}
    </div>
  );
}

export default WaveformVisualizer;
