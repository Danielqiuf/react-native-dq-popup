import { StyleProp } from 'react-native';
import { Position } from './type';
export declare function usePopupAnim({ position, duration, }: {
    position: Position;
    duration: number;
}): {
    style: StyleProp<any>;
    innerStyle: StyleProp<any>;
    show: () => void;
    hide: () => void;
};
