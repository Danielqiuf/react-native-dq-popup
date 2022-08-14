import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Position } from './type';
export interface PopupProps {
    visible: boolean;
    position?: Position;
    duration?: number;
    zIndex?: number;
    mask?: boolean | number;
    maskClosable?: boolean;
    onClose?: () => void;
    onClosed?: () => void;
    onOpened?: () => void;
    destroyOnClose?: boolean;
    children?: React.ReactNode;
    maskStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<ViewStyle>;
}
export declare const Popup: FC<PopupProps>;
