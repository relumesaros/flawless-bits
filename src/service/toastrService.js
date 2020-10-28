import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

const showToaster = (type, message, otherOptions) => {
  toastr.options = {
    positionClass: 'toast-top-full-width',
    hideDuration: 300,
    timeOut: 5000,
    ...otherOptions,
  };
  toastr.clear();
  toastr[type](message);
};

export default {
  error: (message, otherOptions) => {
    const messageFailureDefault = 'Error encounter';

    showToaster('error', message || messageFailureDefault, {
      timeOut: 10000,
      ...otherOptions,
    });
  },

  info: (message, otherOptions) => {
    showToaster('info', message, otherOptions);
  },
  success: (message, otherOptions) => {
    const messageSuccessDefault = 'Success';

    showToaster('success', message || messageSuccessDefault, {
      timeOut: 10000,
      ...otherOptions,
    });
  },
  warning: (message, otherOptions) => {
    showToaster('warning', message, otherOptions);
  },
  clear: () => toastr.clear(),
};
