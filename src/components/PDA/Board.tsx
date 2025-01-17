"use client"
import  {Xwrapper} from 'react-xarrows'
import {useProblem} from '@/context/problem'
import { useTheme } from '@/context/theme'
import PDA1 from './PDA1'
import PDA2 from './PDA2'

const Board = () => {
    const {state} = useProblem();
    const {theme} = useTheme();
    
    return (
        <>
            <Xwrapper>
                {
                    state.selection === '1'?<PDA1 theme={theme} state={state}/>:  state.selection === '2' ? <PDA2 theme={theme} state={state}/>:null
                }
            </Xwrapper>
        </>
    )
}

export default Board;