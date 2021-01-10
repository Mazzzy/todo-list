import React, { FC, useState } from "react";
import Card from "../../atoms/Card/Card";
import CreateContent from "./CreateContent";

const Create: FC = () => {
    const createCompInitialState = {
        itemTitle: "",
    };

    const [createCompState, setCreateCompState] = useState(createCompInitialState);

    const createTextChange = (txtVal: string) => {
        setCreateCompState({ itemTitle: txtVal });
    };

    return (
        <Card title="Create Todo Items">
            <p>Hello world</p>
            <CreateContent
                createCompState={createCompState}
                setCreateCompState={setCreateCompState}
                createTextChange={createTextChange}
            />
        </Card>
    );
};

export default Create;
