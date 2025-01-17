"use client"
import { motion,useDragControls, MotionStyle} from "framer-motion";
import { useXarrow } from "react-xarrows";

type StateProps = {
    state: "Start" | "+" | "-" |string;
    valid: boolean;
    id: string;
    finalState?: boolean
};

/**
 * 
 * This is representing the state of the Finite automata 
 * It is a circle with a value in it which is the state
 * @returns A circle with a value in it
 */
const State = (props:StateProps) => {
    const updatePoints = useXarrow();
    const controls = useDragControls()
    
    const startDrag = (event:any)=>{
        controls.start(event)
    }

    return (
        <>
        <motion.div 
            drag="y"
            dragControls={controls} 
            onPointerDown={startDrag}
            onPointerMove={updatePoints}
            onPointerUp={updatePoints}
            onPointerLeave={updatePoints}
            whileDrag={{ transition:{duration: 0.3, bounce: 1}}}
            dragSnapToOrigin={true}
            dragElastic={1}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 2, power: 1 }}
            id={props.id}
            >
                <motion.div className={`flex items-center flex-col justify-center rounded-full w-[5.5em] h-[5.5em] border-4 font-bold transition-all scale-100 hover:shadow-text_color hover:shadow-md ${props.valid? "border-success bg-success scale-110":"border-primary bg-transparent"}`}>
                    {
                        props.finalState?
                        <div className={`flex items-center flex-col justify-center  transition-color rounded-full w-[4.5em] h-[4.5em] border-4 ${props.valid? "border-success":"border-primary"}`}>
                            <p>{props.state}</p>
                        </div>:
                        <p>{props.state}</p>
                    }
                </motion.div>
        </motion.div>
        </>
    );
};

export default State;