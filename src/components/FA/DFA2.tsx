"use client"

import { IProblemState } from "@/context/problem"
import State from './State'
import Xarrow from 'react-xarrows'

const DFA2 = ({theme, state}: {theme:string, state: IProblemState}) => {
    return (
        <>
            {/* Q0 */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[0rem]`}>
                <State id={'q0'} state={'q0'} finalState={state.dfa.F.includes('q0')} valid={state.dfa.path[state.simulation.step] === 'q0' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0,1" path='straight' 
                    animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q0.01'} start={'q0'} end={'q1'} />
            {/* Q1 */}
            <div className={`absolute flex justify-center items-center top-[40%] left-[15rem]`}>
                <State id={'q1'} state={'q1'} finalState={state.dfa.F.includes('q1')} valid={state.dfa.path[state.simulation.step] === 'q1' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.0'} start={'q1'} end={'q3'} />
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q1.1'} start={'q1'} end={'q2'} />
            {/* Q2 */}
            <div className={`absolute flex justify-center items-center top-[25%] left-[25rem]`}>
                <State id={'q2'} state={'q2'} finalState={state.dfa.F.includes('q2')} valid={state.dfa.path[state.simulation.step] === 'q2' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.0'} start={'q2'} end={'q4'} />
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q2.1'} start={'q2'} end={'q5'} />
            {/* Q3 */}
            <div className={`absolute flex justify-center items-center top-[55%] left-[25rem]`}>
                <State id={'q3'} state={'q3'} finalState={state.dfa.F.includes('q3')} valid={state.dfa.path[state.simulation.step] === 'q3' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.0'} start={'q3'} end={'q7'} />
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q3.1'} start={'q3'} end={'q6'} />
            {/* Q4 */}
            <div className={`absolute flex justify-center items-center top-[1%] left-[38rem]`}>
                <State id={'q4'} state={'q4'} finalState={state.dfa.F.includes('q4')} valid={state.dfa.path[state.simulation.step] === 'q4' ? true:false}/>
            </div>
            <Xarrow endAnchor={'top'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.1'} start={'q4'} end={'q8'} />
            <Xarrow endAnchor={'top'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='straight' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q4.0'} start={'q4'} end={'q7'} />
            {/* Q5 */}
            <div className={`absolute flex justify-center items-center top-[25%] left-[38rem]`}>
                <State id={'q5'} state={'q5'} finalState={state.dfa.F.includes('q5')} valid={state.dfa.path[state.simulation.step] === 'q5' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q5.1'} start={'q5'} end={'q8'} />
            <Xarrow endAnchor={'bottom'} startAnchor={'top'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q5.0'} start={'q5'} end={'q4'} />
            {/* Q6 */}
            <div className={`absolute flex justify-center items-center top-[70%] left-[38rem]`}>
                <State id={'q6'} state={'q6'} finalState={state.dfa.F.includes('q6')} valid={state.dfa.path[state.simulation.step] === 'q6' ? true:false}/>
            </div>
            <Xarrow endAnchor={'bottom'} startAnchor={'top'}  strokeWidth={3} zIndex={-100} labels="1" path='smooth' 
                animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q6.1'} start={'q6'} end={'q5'} />
            <Xarrow showHead={false} _cpy1Offset={200} _cpx1Offset={-1600} _cpx2Offset={-400}  endAnchor={'left'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q6.0'} start={'q6'} end={'q4'} />
            {/* Q7 */}
            <div className={`absolute flex justify-center items-center top-[45%] left-[50rem]`}>
                <State id={'q7'} state={'q7'} finalState={state.dfa.F.includes('q7')} valid={state.dfa.path[state.simulation.step] === 'q7' ? true:false}/>
            </div>
            <Xarrow endAnchor={'left'} startAnchor={'right'}  strokeWidth={3} zIndex={-100} labels="0" path='smooth' 
                animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q7.0'} start={'q7'} end={'q8'} />
            <Xarrow endAnchor={'bottom'} startAnchor={'left'}  strokeWidth={3} zIndex={-100} labels="1" path='straight' 
                animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q7.1'} start={'q7'} end={'q2'} />
            {/* Q8 */}
            <div className={`absolute flex justify-center items-center top-[40%] right-[0rem]`}>
                <State id={'q8'} state={'q8'} finalState={state.dfa.F.includes('q8')} valid={state.dfa.path[state.simulation.step] === 'q8' ? true:false}/>
            </div>
            <Xarrow _cpy1Offset={100} _cpx1Offset={200} _cpx2Offset={100} endAnchor={'right'} startAnchor={'bottom'}  strokeWidth={3} zIndex={-100} labels="0,1" path='smooth' 
                        animateDrawing color={theme=== 'Dark'? "#3498DB":"gray"} key={'q8.01'} start={'q8'} end={'q8'} />
        </>
    )
    
}
export default DFA2;