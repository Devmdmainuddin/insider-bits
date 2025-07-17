const env = process.env.NEXT_ENV || 'development';

export const onPrintLog = (value: unknown) => {
    if (env !== 'productions') {
        console.log(value);
    }

    return;
};
