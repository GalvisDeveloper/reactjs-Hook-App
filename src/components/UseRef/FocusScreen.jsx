import React, { useEffect } from 'react'
import { useRef } from 'react';
import { useForm } from '../../hooks';
import { ButtonForm, CustomFragment, InputContent, InputText, OptionalMessage, Title } from '../../styles/General'

const initialForm = {
    name: "",
};

const UseRef = () => {

    const [formValues, handleInputChange] = useForm(initialForm);

    const { name } = formValues;

    const ref = useRef();

    const onClick = () => {
        ref.current.select();
    }

    useEffect(() => {
        console.log(ref)
    }, []);

    return (
        <CustomFragment>
            <Title size={3}>
                Focus Screen
            </Title>

            <hr />

            <CustomFragment className="actions">
                <InputContent hg={85}>
                    <InputText
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Your name"
                        autoComplete="off"
                        value={name}
                        size={20}
                        ref={ref}
                        onChange={handleInputChange}
                    />
                </InputContent>
            </CustomFragment>

            <ButtonForm type="submit" onClick={onClick}>
                Set Focus
            </ButtonForm>
            <OptionalMessage>
                <p style={{ fontSize: 12 }}>{!!ref && 'Consulta la consola para ver el comportamiento'}</p>
            </OptionalMessage>
        </CustomFragment>

    )
}

export default UseRef