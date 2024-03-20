import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

interface INotification {
    message: string;
    otherOptions?: any;
}

interface ToastrOptions extends INotification {
    type: 'error' | 'info' | 'success' | 'warning';
}

const showToaster = ({type, message, otherOptions}: ToastrOptions) => {
    toastr.options = {
        positionClass: 'toast-top-full-width',
        hideDuration: 300,
        timeOut: 10000,
        ...otherOptions,
    };
    toastr.clear();
    toastr[type](message);
};


export default {
    error: ({message, otherOptions}: INotification) => {
        const messageFailureDefault = 'Error encounter';

        showToaster({
            type: 'error',
            message: message || messageFailureDefault,
            otherOptions
        });
    },

    info: ({message, otherOptions}: INotification) => {
        showToaster({
            type: 'info',
            message: message,
            otherOptions
        });
    },
    success: ({message, otherOptions}: INotification) => {
        const messageSuccessDefault = 'Success';

        showToaster({
            type: 'success',
            message: message || messageSuccessDefault,
            otherOptions
        });

    },

    warning: ({message, otherOptions}: INotification) => {
        showToaster({
            type: 'warning',
            message: message,
            otherOptions
        });
    },
    clear: () => toastr.clear(),
};
