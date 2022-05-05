import React from "react";


export const InputTest: React.FC = () => {

    const row1Inputs = [1, 2, 3, 4];

    const handleKeyPress = (event: any) => {
        const form = event.target.form
        const index = [...form].indexOf(event.target)

        setTimeout(() => {
            console.log(event.key);

            if (event.key !== "Backspace") {
                if (index < row1Inputs.length - 1) {
                    console.log("Move Forward")
                    form.elements[index + 1].focus();
                    event.preventDefault()
                }
            }
        }, 1)
    }

    const handleKeyDown = (event: any) => {
        const form = event.target.form
        const index = [...form].indexOf(event.target)
        setTimeout(() => {
            console.log(event.key);
            if (event.key === "Backspace") {
                console.log("Move Back")
                form?.elements[index - 1]?.focus();
                event.preventDefault()
            }
        }, 1);
    }

    return (
        <div>
            <form>
                {
                    row1Inputs.map((i) => {
                        return (<input key={i} onKeyPress={handleKeyPress} onKeyDown={handleKeyDown} type="text" maxLength={1} />)
                    })
                }
            </form>

        </div>
    )
}