import React from 'react';
import cx from 'classnames';
import {
    provideFASTDesignSystem,
    fastButton
} from '@microsoft/fast-components';
import { provideReactWrapper } from '@microsoft/fast-react-wrapper';

const { wrap } = provideReactWrapper(
    React,
    provideFASTDesignSystem()
);

export const FastButton = wrap(fastButton())


var tinycolor = require('tinycolor2');

export const ButtonFast = function ButtonFast({ height, properties, styles, fireEvent }) {
    const { loadingState, text } = properties;
    const { backgroundColor, textColor, borderRadius, visibility, disabledState } = styles;

    const computedStyles = {
        backgroundColor,
        //backgroundColor: '#F00',
        color: textColor,
        width: '100%',
        borderRadius: `${borderRadius}px`,
        height,
        display: visibility ? '' : 'none',
        '--tblr-btn-color-darker': tinycolor(backgroundColor).darken(8).toString(),
    };

    return (

        <FastButton appearance="accent"
            className={cx('jet-button btn btn-primary p-1 overflow-hidden', {
                'btn-loading': loadingState,
            })}

            onClick={(event) => {
                event.stopPropagation();
                fireEvent('onClick');
            }}
        >
            BF - {text}
        </FastButton >
    );
};
