import React, { useState, useCallback, SetStateAction } from 'react';

export function useToggle(intitialValue=false): [boolean, Function] {
    const [value, setValue] = useState(intitialValue);

    const toggle = useCallback(() => {
        setValue((v: boolean) => !v);
    }, []);

    return [value, toggle];
};