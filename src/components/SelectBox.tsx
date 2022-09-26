import React from 'react';

enum SelectValues {
    OPTION_ONE = "Option 1",
    OPTION_TWO = "Option 2"
}

interface ISelectChange {
    value: SelectValues
}

const SelectBox: React.FC = () => {

    const handleSelectChange = (value: ISelectChange) => {
        console.log(value);
    }

    return(
        <>
        <select id="selectOption" onChange={(event) => handleSelectChange(event.target.value as unknown as ISelectChange)}>
            <option value={SelectValues.OPTION_ONE}>{SelectValues.OPTION_ONE}</option>
            <option value={SelectValues.OPTION_TWO}>{SelectValues.OPTION_TWO}</option>
        </select>
        </>
    )

}

export default SelectBox;