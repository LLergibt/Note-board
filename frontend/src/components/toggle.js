import {useState} from 'react'
const Toggle = ({isToggled, onToggle}) => {
 const [enabled, setEnabled] = useState(isToggled);
    return (
                <div className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                          const newValue = !enabled
                          onToggle(newValue)
                          setEnabled(newValue)
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-violet-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black"
                    ></div>
                </div>

    )}
export default Toggle
