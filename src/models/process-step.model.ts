export interface ProcessCardModel {
    image: string;
    number: number;
    title: string;
    description: string;
    call_to_action?: CallToActionType; 
}

type CallToActionType = {
    text: string;
    link: string | undefined;
    isInternal: boolean;
}