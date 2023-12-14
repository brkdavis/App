import React from 'react';
// eslint-disable-next-line no-restricted-imports
import useThemeStyles from '@hooks/useThemeStyles';
import colors from '@styles/theme/colors';
import Text from './Text';

type TextPillProps = {
    /** The color of the text */
    color?: string;

    children: React.ReactNode;
};

function TextPill({color, children}: TextPillProps) {
    const styles = useThemeStyles();

    return <Text style={[{backgroundColor: color ?? colors.red, alignSelf: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6}, styles.textStrong]}>{children}</Text>;
}

TextPill.displayName = 'TextPill';

export default TextPill;
