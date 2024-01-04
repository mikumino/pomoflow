import { useRef } from 'react';
import { IoIosHelpCircleOutline, IoIosClose } from "react-icons/io";
import { FaGithub, FaCoffee } from "react-icons/fa";


const Help = () => {
    const helpRef = useRef<HTMLDialogElement | null>(null);

    const handleOpen = () => {
        if (helpRef.current) {
            helpRef.current.showModal();
        }
    }

    return (
        <div>
            <div>
                <div className="btn btn-ghost" onClick={handleOpen}><IoIosHelpCircleOutline className="text-primary text-2xl"/></div>
            </div>
            <dialog id="help" ref={helpRef} className="modal outline-none" >
                <div className="modal-box">
                    <div className='flex flex-row w-full justify-between mb-4'>
                        <h1 className="font-bold text-primary text-3xl">PomoFlow</h1>
                        <div className='m-0 modal-action'>
                            <form method="dialog">
                                <button><IoIosClose className='hover:text-accent text-primary text-3xl transition-all' />
                                </button>
                            </form>
                        </div>
                    </div>
                    <p className="mb-4">A productivity timer that includes Flowtime and Pomodoro.</p>
                    <h2 className='text-xl text-primary'>Flowtime</h2>
                    <p className="mb-4">The Flowtime technique is a time management technique that involves working on a task until your focus has dropped and taking a break based off of that time. It is useful for tasks that require deeper thought and concentration.</p>
                    <h2 className='text-xl text-primary'>Pomodoro</h2>
                    <p className="mb-4">The Pomodoro technique involves working for a set amount of time, typically around 25 minutes, and then taking a short break for about 5 minutes. This repeats until the 4th pomodoro, where a longer break is taken.</p>
                    <p className="mb-4">Both techniques are quite useful and can be applied in different scenarios. This app is meant to contain stopwatches/timers that can achieve the goals of Flowtime and Pomodoro.</p>
                    <h2 className='text-xl text-primary'>How to Use</h2>
                    <p className="mb-4">The default mode of this app is Flowtime. To change modes, press the icon above the time display.</p>
                    <p className='mb-4'>For <span className='text-primary font-bold mb-4'>Flowtime</span>, start the stopwatch and work until your focus has dropped. Press the stop button to end your focus session and switch to break mode. In break mode, press play to start the timer.</p>
                    <p className='mb-4'>For <span className="text-primary font-bold ">Pomodoro</span>, start the timer and focus for the entire duration. The app will handle switching modes for you when the timers expire.</p>
                    <a href='https://github.com/mikumino/pomoflow' target='_blank'><button className='btn btn-outline btn-primary w-full my-6'>Source Code <FaGithub /></button>
                    </a>
                    <p className='text-xs text-center'>made by mikumino 💖</p>
                    
                </div>
                <form method="dialog" className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </div>
    )
}

export default Help;