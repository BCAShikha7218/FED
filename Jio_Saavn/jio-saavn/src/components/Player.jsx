import React from 'react'

const Player = () => {
  return (
    <div className="fixed bottom-0 right-0 left-0 bg-[#f5f5f5ff] flex flex-col">
    <input
      type="range"
      name="progress"
      id="progress"
      min={0}
      max={100}
      step="0.1"
      value={0}
    //   ref={inputRef}
    //   onChange={handleProgressChange}
      className="w-full h-[5px] text-green-400 range"
    />
    </div>
  )
}

export default Player
