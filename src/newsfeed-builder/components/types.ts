export type NewsfeedSettings = {
    layout: {
        width: string;
        columns: number;
        minWidthPost: number;
        justifyContent: string;
    };
    title: {
        fontFamily: string;
        color: string;
        fontSize: number;
        maxLength: number;
    };
    text: {
        rows: number;
        fontFamily: string;
        color: string;
        fontSize: number;
        maxLength: number;
    };
    image: {
        height: number;
        width: number | string;
        borderWidth: number;
        borderColor: string;
        borderRadius: number;
        objectFit: string;
    };
};
