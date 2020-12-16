import React, {MouseEventHandler} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent, DialogProps,
    DialogTitle, Typography,
    withStyles
} from "@material-ui/core";

export const ConfirmationDialog = withStyles({
    root: {

    }
})(({
    classes = {},
    open = false,
    title,
    children,
    onCancel,
    onConfirm,
    textCancel = 'Annuler',
    textConfirm = 'Confirmer',
    ...props
}: ConfirmationDialogProps) => {
    return (
        <div className={classes.root}>
            <Dialog open={open} disableBackdropClick disableEscapeKeyDown fullWidth maxWidth={"sm"} {...props}>
                <DialogTitle>{title}</DialogTitle>
                <DialogContent dividers>
                    <Typography variant={"body1"} color={"textPrimary"} component={"div"}>{children}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button color={"default"} onClick={onCancel} autoFocus disableFocusRipple>{textCancel}</Button>
                    <Button color={"primary"} variant={"contained"} onClick={onConfirm}>{textConfirm}</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
});

export interface ConfirmationDialogProps extends DialogProps {
    title: string,
    classes?: any,
    onCancel?: MouseEventHandler<HTMLButtonElement>,
    onConfirm?: MouseEventHandler<HTMLButtonElement>,
    textCancel?: string,
    textConfirm?: string,
}

export default ConfirmationDialog