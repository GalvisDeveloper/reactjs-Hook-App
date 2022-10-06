import React, { useState, useMemo } from 'react'
import { useCounter } from '../../hooks';
import { Button, CustomFragment, Number, OptionalMessage, Title } from '../../styles/General'
import Message from '../AtomicComponents/Message';
import SmallWithMemo from './SmallWithMemo';
import SmallWithoutMemo from './SmallWithoutMemo';


const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('There we go!')
    }

    return `${iterationNumber} iterations done`
}

const Memorize = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);
    const [isMemo, setIsMemo] = useState(true);

    const memorizeValue = useMemo(() =>
        heavyStuff(counter)
        , [counter]);

    console.log(memorizeValue);

    return (
        <CustomFragment>
            <Title size={3}>
                Counter with Hook:
                {isMemo ?
                    <SmallWithMemo value={counter} />
                    :
                    <SmallWithoutMemo value={counter} />
                }
            </Title>

            <hr />


            <CustomFragment className="actions">
                <Button onClick={() => setIsMemo(!isMemo)}> {!isMemo ? 'Active' : 'Disable'} memo </Button>

                <p style={{ color: 'red' }}>
                    Memo is {isMemo ? <strong>activated</strong> : <strong>disabled</strong>}
                </p>

                <Message message={'Check the console and look what happen if you click both bottons bellow'} />
                <Message message={'Look how many times the component has updates with memo activated or disabled'} />


                <Button onClick={() => increment(1)}> + 1 </Button>
                <Button onClick={() => setShow(!show)}>
                    Show/Hide {JSON.stringify(show)}
                </Button>
            </CustomFragment>
        </CustomFragment>
    )
}

export default Memorize