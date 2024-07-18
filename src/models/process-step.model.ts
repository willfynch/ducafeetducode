export interface ProcessCardModel {
    image: string;
    number: 'étape 1' | 'étape 2' | 'étape 3' | 'étape 4'| 'étape 5'| 'étape 6' | 'étape 7';
    title: string;
    description: string;
    call_to_action?: CallToActionType; 
}

type CallToActionType = {
    text: string;
    action: ()=>void
}