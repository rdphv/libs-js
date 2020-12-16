import React, {useState} from 'react';
import ConfirmationDialog from '../src';
import {withKnobs} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";
import {Button} from "@material-ui/core";

export default {
    title: 'ConfirmationDialog',
    component: ConfirmationDialog,
    decorators: [withKnobs],
}

export const actionDangereuse = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Button color={"default"} variant={"contained"} onClick={() => setOpen(true)}>Supprimer</Button>
            <ConfirmationDialog
                title={"Confirmation de suppression"}
                open={open}
                onConfirm={action("action confirmée")}
                onCancel={() => setOpen(false)}
            >
                Êtes-vous sûr de vouloir supprimer ces utilisateurs ?
            </ConfirmationDialog>
        </>
    );
};

